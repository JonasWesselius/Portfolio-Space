import { useState } from 'react';
import './HomePage.css';
import PropTypes from 'prop-types';
import profileImg from '../assets/profile.png';
import moonImg from '../assets/moon.png';

const skills = [
  'JavaScript', 'React', 'TypeScript', 'HTML', 'CSS', 'Photoshop','Illustrator','InDesign',
  'Wireframing', 'Git', 'Figma', 'SQL', 'Next.js', 'Tailwind CSS'
];

function HomePage({ onNavigate, currentPage }) {
  const [leftMoonStyle, setLeftMoonStyle] = useState({ transform: 'translateX(-50%)' });
  const [rightMoonStyle, setRightMoonStyle] = useState({ transform: 'translateX(50%)' });

  const handleMoonClick = (direction) => {
    if (currentPage === 'home') {
      // Going from home to another page
      if (direction === 'left') {
        setLeftMoonStyle({ transform: 'translateX(150%)', transition: 'transform 0.8s ease-in-out' });
      } else {
        setRightMoonStyle({ transform: 'translateX(-150%)', transition: 'transform 0.8s ease-in-out' });
      }
      
      setTimeout(() => {
        onNavigate(direction);
      }, 800);
    } else {
      // Going back to home - slide in the opposite direction
      const slideDirection = currentPage === 'projects' ? 'right' : 'left';
      if (slideDirection === 'left') {
        setLeftMoonStyle({ transform: 'translateX(150%)', transition: 'transform 0.8s ease-in-out' });
      } else {
        setRightMoonStyle({ transform: 'translateX(-150%)', transition: 'transform 0.8s ease-in-out' });
      }
      
      setTimeout(() => {
        onNavigate('home');
      }, 800);
    }
  };

  return (
    <div className={`home-page ${currentPage !== 'home' ? 'page-inactive' : ''}`}>
      <div className="moon left-moon" 
        onClick={() => handleMoonClick('left')} 
        style={{ 
          ...leftMoonStyle,
          backgroundImage: `url(${moonImg})`
        }}>
      </div>
      
      <div className="content-container">
        <div className="profile-container">
          <div className="profile-circle">
            <img src={profileImg} alt="Jonas Profile" className="profile-image" />
          </div>
          <div className="intro-text">
            <h1>Hello, I&apos;m Jonas</h1>
            <p>I specialize in front-end development</p>
          </div>
        </div>
        <div className="floating-skills">
          {skills.map((skill, index) => (
            <span 
              key={skill} 
              className="skill-tag"
              style={{
                '--delay': `${index * -3}s`,
                '--duration': `${15 + Math.random() * 10}s`,
                '--position': `${Math.random() * 100}%`
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="moon right-moon" 
        onClick={() => handleMoonClick('right')} 
        style={{ 
          ...rightMoonStyle,
          backgroundImage: `url(${moonImg})`
        }}>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired
};

export default HomePage; 