import React from 'react';

function Home({ onButtonClick }) {
  return (
    <section id="home" className="cover-page">
      <div className="container">
        <img src="path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
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
