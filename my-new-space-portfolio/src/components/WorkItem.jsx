import PropTypes from 'prop-types';
import './WorkItem.css';

function WorkItem({ title, image, isReversed, onClick }) {
  return (
    <div 
      className={`work-item ${isReversed ? 'reversed' : ''}`}
      onClick={onClick}
    >
      <div className="work-content">
        <h3>{title}</h3>
      </div>
      <div className="work-image" style={{ backgroundImage: `url(${image})` }} />
    </div>
  );
}

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isReversed: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default WorkItem; 