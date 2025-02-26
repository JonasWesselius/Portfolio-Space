import './Navigation.css';
import PropTypes from 'prop-types';

function Navigation({ currentPage, onNavigate }) {
  return (
    <div className="navigation">
      <span 
        className={currentPage === 'projects' ? 'active' : ''} 
        onClick={() => onNavigate('left')}
      >
        projects
      </span>
      <span 
        className={currentPage === 'home' ? 'active' : ''} 
        onClick={() => currentPage !== 'home' ? onNavigate('home') : null}
      >
        home
      </span>
      <span 
        className={currentPage === 'learning' ? 'active' : ''} 
        onClick={() => onNavigate('right')}
      >
        learning outcomes
      </span>
    </div>
  );
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default Navigation; 