import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import moonImg from '../../assets/moon.png';
import placeholder1 from '../../assets/placeholder1.png';
import placeholder2 from '../../assets/placeholder2.png';
import CircularNav from '../layouts/CircularNav';
import WorkItem from '../common/WorkItem';
import WorkDetail from '../common/WorkDetail';
import './LearningPage.css';

const sections = ["Media Products", "Development", "Iterative Design", "Professionalism", "Personal", ];

const workItems = [
  {
    id: 'react-portfolio',
    title: "React Portfolio Website",
    image: placeholder1,
    section: 0
  },
  {
    id: 'brandguide-studio',
    title: "Brandguide for Studio",
    image: placeholder2,
    section: 1
  },
  {
    id: 'studio-logos',
    title: "Logos for Studio",
    image: placeholder1,
    section: 2
  },
  {
    id: 'woodworks',
    title: "Woodworks Overhaul",
    image: placeholder2,
    section: 3
  },
  {
    id: 'studio-presentations',
    title: "Studio Presentations",
    image: placeholder1,
    section: 4
  },
  {
    id: 'personas',
    title: "User Personas",
    image: placeholder2,
    section: 5
  },
  {
    id: 'client-meetings',
    title: "Client meetings",
    image: placeholder1,
    section: 6
  },

  {
    id: 'motivation',
    title: "Motivation",
    image: placeholder2,
    section: 7
  },
  {
    id: 'poster-presentation',
    title: "Poster Presentation",
    image: placeholder1,
    section: 8
  },
  {
    id: 'art-department',
    title: "Art Department",
    image: placeholder2,
    section: 9
  },
  {
    id: 'mockup-project',
    title: "Mockup Project",
    image: placeholder1,
    section: 10 
  },
  {
    id: 'career-day',
    title: "Career Day",
    image: placeholder2,
    section: 11
  },
  {
    id: 'swot-analysis',
    title: "SWOT Analysis",
    image: placeholder1,
    section: 12
  },
  {
    id: 'project-coding',
    title: "Project Coding",
    image: placeholder2,
    section: 13
  }
];

function LearningPage({ onNavigate, workPath }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedWork, setSelectedWork] = useState(null);
  const gridRef = useRef(null);
  const isScrolling = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (workPath) {
      const work = workItems.find(item => item.id === workPath);
      if (work) {
        setSelectedWork(work);
        setCurrentSection(work.section);
      }
    }
  }, [workPath]);

  useEffect(() => {
    if (selectedWork) {
      setTimeout(() => {
        const workDetail = document.querySelector('.work-detail');
        if (workDetail) {
          workDetail.classList.add('visible');
        }
      }, 50);
    }
  }, [selectedWork]);

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
    // Only add fade-out class to the page content
    // const pageContent = document.querySelector('.page-content');
    // if (pageContent) {
    //   pageContent.classList.add('fade-out');
    // }
    
    // Add moon animation
    const moon = document.querySelector('.learning-page .moon');
    if (moon) {
      moon.classList.add('sliding-left');
    }

    setTimeout(() => {
      onNavigate('home');
    }, 800);
  };

  const handleWorkClick = (work) => {
    setSelectedWork(work);
    navigate(`/learning/${work.id}`);
    
    // Add a small delay to ensure the component is mounted before adding the visible class
    setTimeout(() => {
      const workDetail = document.querySelector('.work-detail');
      if (workDetail) {
        workDetail.classList.add('visible');
      }
    }, 50);
  };

  const handleBackToLearning = () => {
    const workDetail = document.querySelector('.work-detail');
    workDetail.classList.remove('visible');
    workDetail.classList.add('sliding-down');
    
    setTimeout(() => {
      setSelectedWork(null);
      navigate('/learning');
      workDetail.classList.remove('sliding-down');
    }, 300);
  };

  return (
    <div className={`learning-page ${selectedWork ? 'work-detail-view' : ''}`}>
      <div className="moon-container">
        <div 
          className="moon left-moon"
          onClick={handleMoonClick} 
          style={{ backgroundImage: `url(${moonImg})` }}
        />
        <div className="nav-arrow left-arrow"></div>
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
              key={item.id}
              title={item.title}
              image={item.image}
              isReversed={index % 2 !== 0}
              onClick={() => handleWorkClick(item)}
            />
          ))}
        </div>
        {selectedWork && (
          <WorkDetail 
            title={selectedWork.title}
            onBack={handleBackToLearning}
            workId={selectedWork.id}
          />
        )}
      </div>
    </div>
  );
}

LearningPage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  workPath: PropTypes.string,
};

export default LearningPage;