import React, { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [activePanel, setActivePanel] = useState(null);
  const [showSkills, setShowSkills] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleButtonClick = (panel) => {
    if (activePanel === panel) {
      setActivePanel(null);
      setShowSkills(false);
    } else {
      if (panel === 'projects') {
        setShowSkills(true);
      } else {
        setShowSkills(false);
      }
      setActivePanel(panel);
    }
  };

  return (
    <div className="App">
      <div className={`main-content ${activePanel ? `shrinked-${activePanel}` : ''}`}>
        <Home onButtonClick={handleButtonClick} />
        <div className={`slide-in left ${activePanel === 'projects' ? 'visible' : ''}`}>
          <button className={`close-button ${activePanel === 'projects' ? 'visible' : ''}`} onClick={() => handleButtonClick('projects')}>
            Close Projects
          </button>
          <Projects onProjectHover={setHoveredProject} />
        </div>
        <div className={`slide-in left ${showSkills && activePanel === 'projects' ? 'visible skills' : ''}`}>
          <Skills project={hoveredProject} />
        </div>
        <div className={`slide-in right ${activePanel === 'contact' ? 'visible' : ''}`}>
          <Contact onButtonClick={() => handleButtonClick('contact')} />
        </div>
      </div>
    </div>
  );
}

export default App;
