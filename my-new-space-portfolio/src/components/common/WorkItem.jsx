import PropTypes from 'prop-types';
import './WorkItem.css';

function WorkItem({ title, image, onClick, activeFilter, onFilterClick }) {
  return (
    <div className="work-item" onClick={onClick}>
      <div className="work-content">
        <div className="work-header">
          <h3>{title}</h3>
          {activeFilter && (
            <div className="filter-link" onClick={onFilterClick}>
              <span>View in {activeFilter.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}</span>
            </div>
          )}
        </div>
      </div>
      <div className="work-image" style={{ backgroundImage: `url(${image})` }} />
    </div>
  );
}

WorkItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  activeFilter: PropTypes.string,
  onFilterClick: PropTypes.func
};

export default WorkItem; 