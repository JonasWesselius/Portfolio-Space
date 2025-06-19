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
import { reactPortfolioWork } from '../work/reactPortfolio';
import { brandguideStudioWork } from '../work/brandguideStudio';
import { studioLogosWork } from '../work/studioLogos';
import { motivationWork } from '../work/motivation';
import { clientMeetingsWork } from '../work/clientMeetings';
import { posterPresentationWork } from '../work/posterPresentation';
import { personasWork } from '../work/personas';
import { woodworksWork } from '../work/woodworks';
import { artDepartmentWork } from '../work/artDepartment';
import { mockupProject } from '../work/mockup';
import { careerDay } from '../work/career';
import { swotAnalysisWork } from '../work/swot';
import { projectCodingWork } from '../work/projectCoding';
import { internshipWork } from '../work/iternship';
import { finalPresentationWork } from '../work/finalPresentation';
import { reflectionWork } from '../work/reflection';

const sections = [
  "Media Products & Design",
  "Process & Documentation",
  "Iterative Development",
  "Professional Standards",
  "Personal Growth"
];

// Map section names to their IDs
const sectionToId = {
  "Media Products & Design": "media-products",
  "Process & Documentation": "process-documentation",
  "Iterative Development": "iterations",
  "Professional Standards": "professional",
  "Personal Growth": "personal"
};

// Add tooltips for each section
const sectionTooltips = {
  "Media Products & Design": "Creating engaging concepts and interactive media products using user-centered design principles, visual design techniques, and emerging technologies.",
  "Process & Documentation": "Documenting your process, using version control, and communicating recommendations in both personal and team contexts.",
  "Iterative Development": "Presenting successive iterations of your creative process and explaining the connections between them.",
  "Professional Standards": "Applying methodological approaches to formulate goals, involve stakeholders, conduct research, and make decisions while considering ethical, intercultural, and sustainable factors.",
  "Personal Growth": "Understanding your strengths and areas for improvement in ICT and personal development, taking actions aligned with your core values."
};

// Add filter button text for each section
const filterButtonText = {
  "media-products": "View in Media Products & Design",
  "process-documentation": "View in Process & Documentation",
  "iterations": "View in Iterative Development",
  "professional": "View in Professional Standards",
  "personal": "View in Personal Growth"
};

const workContent = {
  'react-portfolio': reactPortfolioWork,
  'brandguide-studio': brandguideStudioWork,
  'studio-logos': studioLogosWork,
  'motivation': motivationWork,
  'client-meetings': clientMeetingsWork,
  'poster-presentation': posterPresentationWork,
  'personas': personasWork,
  'woodworks': woodworksWork,
  'art-department': artDepartmentWork,
  'mockup-project': mockupProject,
  'career-day': careerDay,
  'swot-analysis': swotAnalysisWork,
  'project-coding': projectCodingWork,
  'internship': internshipWork,
  'final-presentation': finalPresentationWork,
  'reflection': reflectionWork,
};

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
  },
  {
    id: 'internship',
    title: "Internship Search",
    image: placeholder1,
    section: 14
  },
  {
    id: 'final-presentation',
    title: "Final Presentation",
    image: placeholder2,
    section: 15
  },
  {
    id: 'reflection',
    title: "Project Reflection",
    image: placeholder1,
    section: 16
  }
];

function LearningPage({ onNavigate, workPath }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedWork, setSelectedWork] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const gridRef = useRef(null);
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
      document.body.classList.add('work-detail-view');
      setTimeout(() => {
        const workDetail = document.querySelector('.work-detail');
        if (workDetail) {
          workDetail.classList.add('visible');
        }
      }, 50);
    } else {
      document.body.classList.remove('work-detail-view');
    }
  }, [selectedWork]);

  const handleSectionClick = (sectionIndex) => {
    const sectionId = sectionToId[sections[sectionIndex]];
    setActiveFilter(activeFilter === sectionId ? null : sectionId);
    setCurrentSection(sectionIndex);
  };

  const handleMoonClick = () => {
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
    
    setTimeout(() => {
      const workDetail = document.querySelector('.work-detail');
      if (workDetail) {
        workDetail.classList.add('visible');
        // Reset scroll position to top
        workDetail.scrollTop = 0;
      }
    }, 50);
  };

  const handleFilterLinkClick = (work, e) => {
    e.stopPropagation(); // Prevent the work item click from firing
    setSelectedWork(work);
    navigate(`/learning/${work.id}`);
    
    setTimeout(() => {
      const workDetail = document.querySelector('.work-detail');
      if (workDetail) {
        workDetail.classList.add('visible');
        // Scroll to the specific learning outcome after a short delay
        setTimeout(() => {
          const outcomeElement = document.querySelector(`[data-outcome-id="${activeFilter}"]`);
          if (outcomeElement) {
            outcomeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            outcomeElement.classList.add('highlight-outcome');
            setTimeout(() => {
              outcomeElement.classList.remove('highlight-outcome');
            }, 2000);
          }
        }, 100);
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

  // Filter work items based on active filter
  const filteredWorkItems = workItems.filter(item => {
    if (!activeFilter) return true;
    const workData = workContent[item.id];
    return workData?.learningOutcomes?.some(outcome => outcome.id === activeFilter);
  });

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
        activeFilter={activeFilter}
        sectionTooltips={sectionTooltips}
      />
      <div className="page-content">
        <h1 className="page-title">Learning Outcomes</h1>
        <div 
          className="work-grid" 
          ref={gridRef}
        >
          {filteredWorkItems.map((item) => (
            <WorkItem 
              key={item.id}
              title={item.title}
              image={item.image}
              onClick={() => handleWorkClick(item)}
              onFilterClick={(e) => handleFilterLinkClick(item, e)}
              activeFilter={activeFilter}
              filterButtonText={filterButtonText}
            />
          ))}
        </div>
        {selectedWork && (
          <WorkDetail 
            title={selectedWork.title}
            onBack={handleBackToLearning}
            workId={selectedWork.id}
            activeFilter={activeFilter}
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