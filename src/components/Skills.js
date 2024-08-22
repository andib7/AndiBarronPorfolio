import React from 'react';

function Skills({ project }) {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-list">
        {project ? (
          project.map((skill, index) => (
            <div key={index} className="skill-card">
              <p>{skill}</p>
            </div>
          ))
        ) : (
          <p>Hover over a project to see the skills used or gained.</p>
        )}
      </div>
    </div>
  );
}

export default Skills;
