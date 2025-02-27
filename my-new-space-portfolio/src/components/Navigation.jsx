import './Navigation.css';
import PropTypes from 'prop-types';

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
      <span 
        className={currentPage === 'projects' ? 'active' : ''} 
        onClick={() => handleNavClick('left')}
      >
        projects
      </span>
      <span 
        className={currentPage === 'home' ? 'active' : ''} 
        onClick={() => currentPage !== 'home' ? handleNavClick('home') : null}
      >
        home
      </span>
      <span 
        className={currentPage === 'learning' ? 'active' : ''} 
        onClick={() => handleNavClick('right')}
      >
        learnings
      </span>
    </div>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default Navigation; 