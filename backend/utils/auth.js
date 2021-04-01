const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');
const axios = require('axios');
const qs = require('qs');

const { secret, expiresIn } = jwtConfig;

// Sends a JWT Cookie
const setTokenCookie = (res, user) => {
  // Create the token.
  const token = jwt.sign(
    { data: user.toSafeObject() },
    secret,
    { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
  );

  console.log(token);

  const isProduction = process.env.NODE_ENV === 'production';

  // Set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && 'Lax'
  });

  return token;
};

const setSpotifyToken = async (req, res, next) => {

  if (Date.now() > process.env.SPTFY_ACCESS_EXPIRES) {

    const data = qs.stringify({
      'grant_type': 'client_credentials',
      'client_id': process.env.SPTFY_CLIENT_ID,
      'client_secret': process.env.SPTFY_CLIENT_SECRET,
    });

    const config = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': '__Host-device_id=AQDxXPi0Q5FwjyHyslSZaxoMQqoJy-0yRLgU0Kx3oBGpiANj9uVGO-KGktQjLpEC3bCt7Qyj71hfSMx60mm3z4NsigZRU9t-ypk',
      },
      data: data
    };

    const response = await axios(config);
    const tokenObj = response.data;

    if (response.status === 200) {
      process.env.SPTFY_ACCESS_TOKEN = tokenObj.access_token;
      process.env.SPTFY_ACCESS_EXPIRES = Date.now() + tokenObj.expires_in * 1000;
    }

  }

  return next();
};

const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.scope('currentUser').findByPk(id);
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};

// If there is no current user, return an error
const requireAuth = [
  restoreUser,
  function (req, res, next) {
    if (req.user) return next();

    const err = new Error('Unauthorized');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
  }
];

module.exports = { setTokenCookie, restoreUser, requireAuth, setSpotifyToken };
