import { useState, useRef } from 'react';
import './LearningPage.css';
import PropTypes from 'prop-types';
import moonImg from '../assets/moon.png';
import WorkItem from './WorkItem';
import placeholder1 from '../assets/placeholder1.png';
import placeholder2 from '../assets/placeholder2.png';
import CircularNav from './CircularNav';

const sections = ["Media Products", "Development", "Iterative Design", "Professionalism", "Personal", ];

const workItems = [
  {
    title: "React Portfolio Website",
    image: placeholder1,
    section: 0 // Frontend
  },
  {
    title: "Node.js API",
    image: placeholder2,
    section: 1 // Backend
  },
  {
    title: "AWS Infrastructure",
    image: placeholder1,
    section: 2 // DevOps
  },
  {
    title: "React Native App",
    image: placeholder2,
    section: 3 // Mobile
  },
  {
    title: "ML Model Deployment",
    image: placeholder1,
    section: 4 // AI/ML
  },
  {
    title: "UI/UX Design System",
    image: placeholder2,
    section: 5 // Design
  }
];

function LearningPage({ onNavigate }) {
  const [contentFading, setContentFading] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const gridRef = useRef(null);
  const isScrolling = useRef(false);

  const scrollToSection = (sectionIndex) => {
    if (!gridRef.current || isScrolling.current) return;

    isScrolling.current = true;
    const gridHeight = gridRef.current.clientHeight;
    const contentHeight = gridRef.current.scrollHeight;
    const maxScroll = contentHeight - gridHeight;
    const sectionPosition = (sectionIndex / (sections.length - 1)) * maxScroll;

    gridRef.current.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });

    setCurrentSection(sectionIndex);
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrolling.current = false;
    }, 500); // Adjust timing if needed
  };

  const handleScroll = (e) => {
    if (!gridRef.current || isScrolling.current) return;

    const gridHeight = gridRef.current.clientHeight;
    const contentHeight = gridRef.current.scrollHeight;
    const maxScroll = contentHeight - gridHeight;
    const currentScroll = e.target.scrollTop;
    
    const sectionProgress = currentScroll / maxScroll;
    const newSection = Math.round(sectionProgress * (sections.length - 1));
    
    if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
      setCurrentSection(newSection);
    }
  };

  const handleSectionClick = (sectionIndex) => {
    scrollToSection(sectionIndex);
  };

  const handleMoonClick = () => {
    setContentFading(true);
    const moon = document.querySelector('.learning-page .moon');
    moon.classList.add('sliding-left');
    
    setTimeout(() => {
      onNavigate('home');
    }, 400);
  };

  return (
    <div className="learning-page">
      <div className="moon-container">
        <div className="moon left-moon"
          onClick={handleMoonClick} 
          style={{ backgroundImage: `url(${moonImg})` }}>
        </div>
      </div>
      <CircularNav 
        sections={sections}
        currentSection={currentSection}
        onSectionChange={handleSectionClick}
      />
      <div className={`page-content ${contentFading ? 'fade-out' : ''}`}>
        <h1 className="page-title">Learning Outcomes</h1>
        <div 
          className="work-grid" 
          ref={gridRef} 
          onScroll={handleScroll}
        >
          {workItems.map((item, index) => (
            <WorkItem 
              key={index}
              title={item.title}
              image={item.image}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

LearningPage.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

export default LearningPage;