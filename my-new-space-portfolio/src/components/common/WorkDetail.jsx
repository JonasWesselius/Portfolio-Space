import PropTypes from 'prop-types';
import './WorkDetail.css';

function WorkDetail({ title, onBack, className }) {
  return (
    <div className={`work-detail ${className}`}>
      <button className="back-button" onClick={onBack}>
        <span>↑</span> Back to Learning Outcomes
      </button>
      <div className="work-detail-content">
        <h2>{title}</h2>
        <div className="work-description">
          <p>Detailed description of the work...</p>
          <h3>Key Learning Points</h3>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
          </ul>
          <h3>Technologies Used</h3>
          <ul>
            <li>Tech 1</li>
            <li>Tech 2</li>
            <li>Tech 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

WorkDetail.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default WorkDetail; 