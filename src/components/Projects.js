import React from 'react';
import CCCgameImg from '../assets/CCCgame.png';
import ParrotImg from '../assets/Parrot.png';
import NutritionPageImg from '../assets/NutritionPage.png';
import SheepImg from '../assets/Sheep.png';
import GhostImg from '../assets/Ghost.png';
import RobotImg from '../assets/Robot.png';

function Projects({ onProjectHover }) {
  const projects = [
    {
      id: 1,
      name: 'Cassidys Castle Cleaners',
      image: CCCgameImg,
      description: 'My senior capstone project @ UCSC. I worked with a team of 12 people as one of the main developers. I was in charge of enemy/boss AI along with many other programing aspects of our game like integrating animations and events.',
      link: 'https://sunnieside-boi.itch.io/cassidys-castle-cleaners',
      skills: ['AI', 'Unity', 'C#', 'Game Development', 'Behavior Trees', 'Git', 'JavaScript', 'Team Collaboration', 'Event Handling', 'State Management', 'Animation Integration'],
    },
    {
      id: 2,
      name: 'Pixel Blend Lines',
      image: ParrotImg,
      description: 'Creative coding project where I decided to make something random using something as simple as lines.',
      link: 'https://editor.p5js.org/andibarron7/sketches/wBok8T-hd',
      skills: ['JavaScript', 'p5.js Library', 'Graphics Programming', 'Creativity'],
    },
    {
      id: 3,
      name: 'Nutrition App',
      image: NutritionPageImg,
      description: 'Web application that creates digital "plates" of food where the user can see what they are consuming in more detail.',
      link: 'https://github.com/tkj02/Nutrition',
      skills: ['JavaScript', 'Python', 'py4web', 'Full Stack Development', 'State Management', 'Data Handling', 'Web Development'],
    },
    {
      id: 4,
      name: 'Sheep Runner',
      image: SheepImg,
      description: 'Endless runner game. One of my first game projects where I learned to handle events and create gameplay.',
      link: 'https://andib7.github.io/Sheep-Runner/',
      skills: ['JavaScript', 'Phaser.js', 'Game Development', 'Git', 'Asset Integration', 'Event Handling'],
    },
    {
      id: 5,
      name: 'Grave Gamble',
      image: GhostImg,
      description: 'My last game project before my senior capstone. I used many skills learned throughout my game development journey. I also gained new skills like sound/music design.',
      link: 'https://anika-mahajan.github.io/AGraveGamble/',
      skills: ['JavaScript', 'Phaser.js', 'Game Development', 'Git', 'Sound Design', 'Musical Composition', 'Event Handling', 'Animation Integration'],
    },
    {
      id: 6,
      name: 'Womboto Roboto',
      image: RobotImg,
      description: 'A fairly large group project (7 people) where I put my game dev skills to the test. I had to fast-track learning Unity in a short span to contribute to this project.',
      link: 'https://aidanbacon.itch.io/womboto-roboto',
      skills: ['Unity', 'Node.js', 'Game Development', 'Git', 'Sound Design', 'Musical Composition'],
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => onProjectHover(project.skills)}
            onMouseLeave={() => onProjectHover(null)}
          >
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
