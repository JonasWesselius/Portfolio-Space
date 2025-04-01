import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CircularNav.css';

function CircularNav({ sections, currentSection, onSectionChange }) {
  const [activeSection, setActiveSection] = useState(currentSection);

  useEffect(() => {
    setActiveSection(currentSection);
  }, [currentSection]);

  const handleSectionClick = (section) => {
    onSectionChange(section);
  };

  return (
    <div className="circular-nav">
      <div className="half-circle">
        <div 
          className="circle-arc"
          style={{
            '--active-section': currentSection
          }}
        />
      </div>
      <div className="section-titles">
        {sections.map((section, index) => (
          <button
            key={section}
            className={`section-title ${activeSection === index ? 'active' : ''}`}
            onClick={() => handleSectionClick(index)}
            style={{
              top: `${(index * 100) / (sections.length - 1)}%`
            }}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}

CircularNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSection: PropTypes.number.isRequired,
  onSectionChange: PropTypes.func.isRequired
};

export default CircularNav; 