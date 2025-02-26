import { useState } from 'react';
import './ProjectsPage.css';
import PropTypes from 'prop-types';
import moonImg from '../assets/moon.png';

function ProjectsPage({ onNavigate }) {
  const [contentFading, setContentFading] = useState(false);

  const handleMoonClick = () => {
    setContentFading(true);
    const moon = document.querySelector('.projects-page .moon');
    moon.classList.add('sliding-right');
    
    setTimeout(() => {
      onNavigate('home');
    }, 400);
  };

  return (
    <div className="projects-page">
      <div className={`page-content ${contentFading ? 'fade-out' : ''}`}>
        <h1 className="page-title">Projects</h1>
      </div>
      <div className="moon right-moon"
        onClick={handleMoonClick} 
        style={{ backgroundImage: `url(${moonImg})` }}>
      </div>
    </div>
  );
}

ProjectsPage.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

export default ProjectsPage; 