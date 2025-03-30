import PropTypes from 'prop-types';
import moonImg from '../../assets/moon.png';
import './Moon.css';

function Moon({ position = 'left', onClick }) {
  return (
    <div className={`moon-container ${position}`}>
      <div 
        className={`moon ${position}-moon`}
        onClick={onClick}
        style={{ backgroundImage: `url(${moonImg})` }}
      />
      <div className={`nav-arrow ${position}-arrow`}></div>
    </div>
  );
}

Moon.propTypes = {
  position: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func.isRequired
};

export default Moon; 