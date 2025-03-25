import './Navigation.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ currentPage, onNavigate }) {
  const handleNavClick = (direction) => {
    // Find the current moon to animate
    let moon;
    if (currentPage === 'home') {
      // If going from home, animate the corresponding moon
      moon = document.querySelector(direction === 'left' ? '.left-moon' : '.right-moon');
      moon.classList.add(direction === 'left' ? 'sliding-left' : 'sliding-right');
    } else {
      // If going to home, animate the current page's moon
      moon = document.querySelector(`.${currentPage}-page .moon`);
      moon.classList.add(currentPage === 'projects' ? 'sliding-right' : 'sliding-left');
    }

    // Wait for animation to start before changing page
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