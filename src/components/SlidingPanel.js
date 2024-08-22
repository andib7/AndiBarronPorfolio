import React from 'react';
import './SlidingPanel.css';

const SlidingPanel = ({ isOpen, onClose, children, position }) => {
  const positionClass = position === 'left' ? 'slide-in-left' : 'slide-in-right';

  return (
    <div className={`sliding-panel ${positionClass} ${isOpen ? 'active' : ''}`}>
      <button onClick={onClose} className={`close-button ${isOpen ? 'visible' : ''}`}>Close</button>
      <div className="panel-content">
        {children}
      </div>
    </div>
  );
};

export default SlidingPanel;