import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormPage from '../LoginFormPage';
import './Navigation.css';


function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='log-sign-container'>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }

  return (
    <div className='nav-container'>
      <NavLink exact to="/home">
        <i className="fab fa-spotify fa-2x" style={{ color: "white" }}></i>
        <p>
          Stopify
        </p>
      </NavLink>
      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;