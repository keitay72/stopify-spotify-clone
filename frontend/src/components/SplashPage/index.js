import React from 'react';
import './SplashPage.css'


function SplashPage() {
    const title = 'STOPPIFY';
    return (
        <div className="splashPage">
            <section className="splashPage__section">
                <video className="splashPage__video"
                    src="../../../videos/fire-bird.mp4"
                    autoPlay muted></video>
                <h1 className="splashPage__text">
                    {title.split('').map((letter, i) => <span key={i}>{letter}</span>)}
                </h1>
                <a className="splashPage__button" href="http://localhost:3000/login">Login / Join</a>
            </section>
        </div>
    );
}

export default SplashPage;
{/* <div className='splash-container'>
        <div>
            <h1 className='inner-text-1 splash-text'>Listening is</h1>
        </div>
        <div>
            <h1 className='inner-text-2 splash-text'>everything</h1>
        </div>
        <div>
            <h1 className='inner-text-3 splash-text'>Millions of songs and podcasts. No credit card needed</h1>
        </div>
        <a href='http://localhost:3000/signup' className='splash-button-div'>
            <div className='inner-button'>GET SPOTIFY FREE</div>
            <div className='frame-button'></div>
        </a>
    </div> */}