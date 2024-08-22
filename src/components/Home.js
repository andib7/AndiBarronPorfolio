import React from 'react';
import profilePic from '../assets/me.jpg'; // Adjust path as necessary

function Home({ onButtonClick }) {
  return (
    <section id="home" className="cover-page">
      <div className="container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Andi Barron</h1>
        <h2>Full-Stack Developer</h2>
        <p>Welcome to my portfolio!</p>
        <button className="button" onClick={() => onButtonClick('projects')}>
          See My Projects
        </button>
        <button className="button" onClick={() => onButtonClick('contact')}>
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Home;
