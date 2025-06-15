import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CircularNav.css';

function CircularNav({ sections, currentSection, onSectionChange, activeFilter }) {
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
        {sections.map((section, index) => {
          const sectionId = section.toLowerCase().replace(/\s+/g, '-');
          const isActive = activeFilter === sectionId;
          return (
            <button
              key={section}
              className={`section-title ${activeSection === index ? 'active' : ''} ${isActive ? 'filter-active' : ''}`}
              onClick={() => handleSectionClick(index)}
              style={{
                top: `${(index * 100) / (sections.length - 1)}%`
              }}
            >
              {section}
              {isActive && <span className="filter-indicator">●</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

CircularNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentSection: PropTypes.number.isRequired,
  onSectionChange: PropTypes.func.isRequired,
  activeFilter: PropTypes.string
};

export default CircularNav; 