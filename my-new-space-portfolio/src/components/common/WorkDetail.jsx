import PropTypes from 'prop-types';
import './WorkDetail.css';

function WorkDetail({ title, onBack, className }) {
  return (
    <div className={`work-detail ${className}`}>
      <div className="work-detail-header">
        <button className="back-button" onClick={onBack}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19 12H5M12 19l-7-7 7-7"
            />
          </svg>
          <span>Back to Learning</span>
        </button>
        <h1 className="detail-title">{title}</h1>
      </div>
      
      <div className="work-detail-content">
        <div className="work-section">
          <h2 className="section-heading">Introduction</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="work-section">
          <h2 className="section-heading">Getting Started</h2>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>

        <div className="work-section">
          <h2 className="section-heading">Development Process</h2>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>

        <div className="work-section">
          <h2 className="section-heading">Conclusion</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

WorkDetail.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  className: PropTypes.string,
};

WorkDetail.defaultProps = {
  className: '',
};

export default WorkDetail; 