import React, { useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SlidingPanel from './components/SlidingPanel';
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
        <SlidingPanel isOpen={activePanel === 'projects'} onClose={() => handleButtonClick('projects')} position="left">
          <Projects onProjectHover={setHoveredProject} />
        </SlidingPanel>
        <div className={`slide-in left ${showSkills && activePanel === 'projects' ? 'visible skills' : ''}`}>
          <Skills project={hoveredProject} />
        </div>
        <SlidingPanel isOpen={activePanel === 'contact'} onClose={() => handleButtonClick('contact')} position="right">
          <Contact onButtonClick={() => handleButtonClick('contact')} />
        </SlidingPanel>
      </div>
    </div>
  );
}

export default App;
