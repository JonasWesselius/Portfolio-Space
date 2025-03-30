import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './BottomNav.css';

function BottomNav({ currentPage, onNavigate }) {
  useEffect(() => {
    const nav = document.querySelector('.bottom-nav');
    nav.classList.add('fade-in');
  }, []);

  const handleNavClick = (direction) => {
    // Add fade-out class to the current page content
    const pageContent = document.querySelector('.page-content');
    const nav = document.querySelector('.bottom-nav');
    
    if (pageContent) {
      pageContent.classList.add('fade-out');
    }
    nav.classList.add('fade-out');

    // Wait for fade animation before changing page
    setTimeout(() => {
      if (pageContent) {
        pageContent.classList.remove('fade-out');
      }
      nav.classList.remove('fade-out');
      nav.classList.add('fade-in');
      onNavigate(direction);
    }, 400);
  };

  return (
    <nav className="bottom-nav">
      <Link 
        to="/projects"
        className={currentPage === 'projects' ? 'active' : ''} 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('projects');
        }}
      >
        project
      </Link>
      <Link 
        to="/"
        className={currentPage === 'home' ? 'active' : ''} 
        onClick={(e) => {
          e.preventDefault();
          if (currentPage !== 'home') {
            handleNavClick('home');
          }
        }}
      >
        home
      </Link>
      <Link 
        to="/learning"
        className={currentPage === 'learning' ? 'active' : ''} 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('learning');
        }}
      >
        learnings
      </Link>
    </nav>
  );
}

BottomNav.propTypes = {
  currentPage: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default BottomNav; 