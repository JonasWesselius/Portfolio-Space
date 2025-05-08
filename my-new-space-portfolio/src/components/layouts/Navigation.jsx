import './Navigation.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ currentPage, onNavigate }) {
  const handleNavClick = (direction) => {
    // Add fade-out class to the current page content
    // const pageContent = document.querySelector('.page-content');
    // if (pageContent) {
    //   pageContent.classList.add('fade-out');
    // }

    // Wait for fade animation before changing page
    setTimeout(() => {
      onNavigate(direction);
    }, 400);
  };

  return (
    <div className="navigation">
      <Link 
        to="/projects"
        className={currentPage === 'projects' ? 'active' : ''} 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('left');
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
          handleNavClick('right');
        }}
      >
        learnings
      </Link>
    </div>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default Navigation; 