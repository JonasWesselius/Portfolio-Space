import PropTypes from 'prop-types';
import './WorkItem.css';

function WorkItem({ title, image, isReversed, onClick }) {
  return (
    <div 
      className={`work-item ${isReversed ? 'reversed' : ''}`}
      onClick={onClick}
    >
      <div className="work-image-container">
        <img src={image} alt={title} className="work-image" />
        <div className="work-image-overlay">
          <span className="view-text">View Project</span>
        </div>
      </div>
      <div className="work-info">
        <h2 className="work-title">{title}</h2>
        <div className="work-arrow">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path 
              fill="currentColor" 
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isReversed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

WorkItem.defaultProps = {
  isReversed: false,
};

export default WorkItem; 