import React from 'react';
import './Home.css';
import profilePic from '../images/klun.jpg'; // Add your profile picture to the assets folder

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <h1>Hello, I'm Movva Tanmayi</h1>
                <p>I am a web developer in front-end development and design.</p>
            </div>
        </section>
    );
}

export default Home;
