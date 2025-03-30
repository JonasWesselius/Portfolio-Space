import PropTypes from 'prop-types';
import './CircularNav.css';

function CircularNav({ sections, currentSection, onSectionChange }) {
  return (
    <div className="section-menu">
      {sections.map((section, index) => {
        const angle = (index / (sections.length - 1)) * 180;
        const radius = 120; // Radius of the circular navigation
        const x = Math.sin((angle * Math.PI) / 180) * radius;
        const y = Math.cos((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={section}
            className={`nav-item ${currentSection === index ? 'active' : ''}`}
            onClick={() => onSectionChange(index)}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className="nav-dot" />
            <div 
              className="nav-label"
              style={{
                left: x > 0 ? '100%' : 'auto',
                right: x <= 0 ? '100%' : 'auto',
                marginLeft: x > 0 ? '1rem' : 'auto',
                marginRight: x <= 0 ? '1rem' : 'auto',
              }}
            >
              {section}
            </div>
          </div>
        );
      })}
    </div>
  );
}

CircularNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSection: PropTypes.number.isRequired,
  onSectionChange: PropTypes.func.isRequired,
};

export default CircularNav; 