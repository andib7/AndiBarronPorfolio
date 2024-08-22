import React from 'react';

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <div className="social-links">
        <a href="https://github.com/andib7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
        <a href="https://linkedin.com/in/abarron7" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
        <a href="https://andib7.itch.io/" target="_blank" rel="noopener noreferrer"><i className="fas fa-gamepad"></i> Itch.io</a>
        <a href="https://editor.p5js.org/andibarron7/sketches" target="_blank" rel="noopener noreferrer"><i className="fas fa-laptop-code"></i> p5.js</a>
        <a href="https://leetcode.com/u/andibarron7/" target="_blank" rel="noopener noreferrer"><i className="fas fa-code"></i> Leetcode</a>
      </div>
      <p>You can reach me at:</p>
      <ul className="contact-info">
        <li>Email: <a href="mailto:andibarron7@gmail.com">andibarron7@gmail.com</a></li>
        <li>Phone: <a href="tel:+12096664175">+1 (209) 666-4175</a></li>
      </ul>
      <a href="Andi Barron - Resume June 2024.pdf" download className="button download-button">
        Download Resume
      </a>
    </div>
  );
}

export default Contact;
