import { useState } from 'react';
import './LearningPage.css';
import PropTypes from 'prop-types';
import moonImg from '../assets/moon.png';

function LearningPage({ onNavigate }) {
  const [contentFading, setContentFading] = useState(false);

  const handleMoonClick = () => {
    setContentFading(true);
    const moon = document.querySelector('.learning-page .moon');
    moon.classList.add('sliding-left');
    
    setTimeout(() => {
      onNavigate('home');
    }, 400);
  };

  return (
    <div className="learning-page">
      <div className={`page-content ${contentFading ? 'fade-out' : ''}`}>
        <h1 className="page-title">Learning Outcomes</h1>
      </div>
      <div className="moon left-moon"
        onClick={handleMoonClick} 
        style={{ backgroundImage: `url(${moonImg})` }}>
      </div>
    </div>
  );
}

LearningPage.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

export default LearningPage;