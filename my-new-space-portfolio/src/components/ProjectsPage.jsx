import { useState } from 'react';
import './ProjectsPage.css';
import PropTypes from 'prop-types';
import moonImg from '../assets/moon.png';

function ProjectsPage({ visible, onNavigate }) {
  const [moonStyle, setMoonStyle] = useState({ transform: 'translateX(50%)' });

  const handleMoonClick = () => {
    setMoonStyle({ transform: 'translateX(-150%)', transition: 'transform 0.8s ease-in-out' });
    
    setTimeout(() => {
      onNavigate('home');
      setMoonStyle({ transform: 'translateX(50%)' });
    }, 800);
  };

  return (
    <div className="projects-page" style={{ display: visible ? 'block' : 'none' }}>
      <div className="moon right-moon" 
        onClick={handleMoonClick} 
        style={{ 
          ...moonStyle,
          backgroundImage: `url(${moonImg})`
        }}>
      </div>
      {/* Content will go here */}
    </div>
  );
}

ProjectsPage.propTypes = {
  visible: PropTypes.bool,
  onNavigate: PropTypes.func.isRequired
};

export default ProjectsPage; 