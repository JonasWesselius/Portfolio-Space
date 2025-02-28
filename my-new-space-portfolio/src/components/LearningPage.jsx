import { useState, useRef } from 'react';
import './LearningPage.css';
import PropTypes from 'prop-types';
import moonImg from '../assets/moon.png';
import WorkItem from './WorkItem';
import placeholder1 from '../assets/placeholder1.png';
import placeholder2 from '../assets/placeholder2.png';
import CircularNav from './CircularNav';
import WorkDetail from './WorkDetail';

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
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedWork, setSelectedWork] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const gridRef = useRef(null);
  const isScrolling = useRef(false);

  const scrollToSection = (sectionIndex) => {
    if (!gridRef.current || isScrolling.current) return;

    isScrolling.current = true;
    const gridHeight = gridRef.current.clientHeight;
    const contentHeight = gridRef.current.scrollHeight;
    const maxScroll = contentHeight - gridHeight;
    const sectionPosition = (sectionIndex / (sections.length - 1)) * maxScroll;

    // Add moon rotation for section clicks
    const moon = document.querySelector('.learning-page .moon');
    if (moon) {
      const rotationDegrees = -(sectionIndex / (sections.length - 1)) * 180;
      moon.style.transform = `translateX(-50%) rotate(${rotationDegrees}deg)`;
    }

    gridRef.current.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    });

    setCurrentSection(sectionIndex);
    
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const handleScroll = (e) => {
    if (!gridRef.current || isScrolling.current) return;

    const gridHeight = gridRef.current.clientHeight;
    const contentHeight = gridRef.current.scrollHeight;
    const maxScroll = contentHeight - gridHeight;
    const currentScroll = e.target.scrollTop;
    
    const sectionProgress = currentScroll / maxScroll;
    const newSection = Math.round(sectionProgress * (sections.length - 1));
    
    // Add moon rotation based on scroll progress
    const moon = document.querySelector('.learning-page .moon');
    if (moon) {
      const rotationDegrees = -(sectionProgress * 180); // Negative for counter-clockwise
      moon.style.transform = `translateX(-50%) rotate(${rotationDegrees}deg)`;
    }
    
    if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
      setCurrentSection(newSection);
    }
  };

  const handleSectionClick = (sectionIndex) => {
    scrollToSection(sectionIndex);
  };

  const handleMoonClick = () => {
    // Only try to fade elements that exist
    const circularNav = document.querySelector('.circular-nav');
    if (circularNav) {
      circularNav.classList.add('hidden');
    }

    // Add fade-out class to the page content instead of direct style manipulation
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
      pageContent.classList.add('fade-out');
    }
    
    // Add moon animation
    const moon = document.querySelector('.learning-page .moon');
    if (moon) {
      moon.classList.add('sliding-left');
    }

    setTimeout(() => {
      onNavigate('home');
    }, 800);
  };

  const handleWorkClick = (item) => {
    // Start with transition state true
    setIsTransitioning(true);
    setSelectedWork(item);
    
    // Start moon rotation
    const moon = document.querySelector('.learning-page .moon');
    moon.style.transform = `translateX(-50%) rotate(-360deg)`;
    
    // Remove transition state after a very short delay to allow animation
    requestAnimationFrame(() => {
      setIsTransitioning(false);
    });
  };

  const handleBackToLearning = () => {
    setIsTransitioning(true);
    
    // Start moon rotation and slide down together
    const moon = document.querySelector('.learning-page .moon');
    moon.style.transform = `translateX(-50%) rotate(0deg)`;
    
    const workDetail = document.querySelector('.work-detail');
    workDetail.classList.add('sliding-down');
    
    // Wait for animations to complete
    setTimeout(() => {
      setSelectedWork(null);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className={`learning-page ${selectedWork ? 'work-detail-view' : ''}`}>
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
      <div className="page-content">
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
              onClick={() => handleWorkClick(item)}
            />
          ))}
        </div>
      </div>
      {selectedWork && (
        <WorkDetail 
          title={selectedWork.title}
          onBack={handleBackToLearning}
          className={isTransitioning ? '' : 'visible'}
        />
      )}
    </div>
  );
}

LearningPage.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

export default LearningPage;