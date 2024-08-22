import React from 'react';

function Projects({ onProjectHover }) {
  const projects = [
    {
      id: 1,
      name: 'Cassidys Castle Cleaners',
      image: '/images/CCCgame.png',
      description: 'Description of the project.',
      link: 'https://sunnieside-boi.itch.io/cassidys-castle-cleaners',
      skills: ['React', 'CSS'],
    },
    {
      id: 2,
      name: 'Pixel Blend Lines',
      image: 'images/Parrot.png',
      description: 'Description of the project.',
      link: 'https://editor.p5js.org/andibarron7/sketches/wBok8T-hd',
      skills: ['JavaScript', 'Node.js'],
    },
    {
      id: 3,
      name: 'Nutrition App',
      image: 'images/NutritionPage.png',
      description: 'Description of the project.',
      link: 'https://github.com/tkj02/Nutrition',
      skills: ['JavaScript', 'Node.js'],
    },
    {
      id: 4,
      name: 'Sheep Runner',
      image: 'images/Sheep.png',
      description: 'Description of the project.',
      link: 'https://andib7.github.io/Sheep-Runner/',
      skills: ['JavaScript', 'Node.js'],
    },
    {
      id: 5,
      name: 'Grave Gamble',
      image: 'images/Ghost.png',
      description: 'Description of the project.',
      link: 'https://anika-mahajan.github.io/AGraveGamble/',
      skills: ['JavaScript', 'Node.js'],
    },
    {
      id: 6,
      name: 'Womboto Roboto',
      image: 'images/Robot.png',
      description: 'Description of the project.',
      link: 'https://aidanbacon.itch.io/womboto-roboto',
      skills: ['JavaScript', 'Node.js'],
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
