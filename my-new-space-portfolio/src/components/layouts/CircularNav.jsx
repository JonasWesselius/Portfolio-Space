import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CircularNav.css';

function CircularNav({ sections, currentSection, onSectionChange, activeFilter, sectionTooltips }) {
  const [activeSection, setActiveSection] = useState(currentSection);
  const [hoveredSection, setHoveredSection] = useState(null);

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
            <div 
              key={section} 
              className="section-container"
            >
              <button
                className={`section-title ${activeSection === index ? 'active' : ''} ${isActive ? 'filter-active' : ''}`}
                onClick={() => handleSectionClick(index)}
                onMouseEnter={() => setHoveredSection(section)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {section}
                {isActive && <span className="filter-indicator">●</span>}
              </button>
              {hoveredSection === section && (
                <div className="section-tooltip">
                  {sectionTooltips[section]}
                </div>
              )}
            </div>
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
  activeFilter: PropTypes.string,
  sectionTooltips: PropTypes.objectOf(PropTypes.string).isRequired
};

export default CircularNav; 