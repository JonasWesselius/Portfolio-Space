import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import AudioPlayer from './AudioPlayer';
import './WorkDetail.css';

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
};

// Map learning outcome IDs to their section names
const learningOutcomeSections = {
  'media-products': 'Media Products',
  'process-documentation': 'Development',
  'iterations': 'Iterative Design',
  'professional': 'Professionalism',
  'personal': 'Personal'
};

function WorkDetail({ title, onBack, className, workId, activeFilter }) {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [groupedImages, setGroupedImages] = useState({});
  
  const content = workContent[workId] || {
    description: "Detailed description of the work...",
    learningPoints: ["Point 1", "Point 2", "Point 3"],
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    learningOutcome: "Learning outcome description...",
    learningOutcomes: [],
    process: "Process description...",
    images: [],
    userTesting: null 
  };
  
  // Scroll to the relevant learning outcome when there's an active filter
  useEffect(() => {
    if (activeFilter) {
      const outcomeElement = document.querySelector(`[data-outcome-id="${activeFilter}"]`);
      if (outcomeElement) {
        outcomeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        outcomeElement.classList.add('highlight-outcome');
        setTimeout(() => {
          outcomeElement.classList.remove('highlight-outcome');
        }, 2000);
      }
    }
  }, [activeFilter]);

  // Initialize currentImageIndices for each group
  useEffect(() => {
    // Group images by their folder path
    const groups = content.images.reduce((groups, image) => {
      const pathParts = image.url.split('/');
      const groupName = pathParts[pathParts.length - 2]; // Get folder name
      if (!groups[groupName]) {
        groups[groupName] = [];
      }
      groups[groupName].push(image);
      return groups;
    }, {});
    
    setGroupedImages(groups);
    
    // Initialize indices
    const indices = {};
    Object.keys(groups).forEach(group => {
      indices[group] = 0;
    });
    setCurrentImageIndices(indices);
  }, [workId, content.images]);

  // Navigation functions for each group
  const goToNextImage = (group) => {
    if (groupedImages[group] && groupedImages[group].length > 0) {
      setCurrentImageIndices(prev => ({
        ...prev,
        [group]: (prev[group] + 1) % groupedImages[group].length
      }));
    }
  };
  
  const goToPrevImage = (group) => {
    if (groupedImages[group] && groupedImages[group].length > 0) {
      setCurrentImageIndices(prev => ({
        ...prev,
        [group]: prev[group] === 0 ? groupedImages[group].length - 1 : prev[group] - 1
      }));
    }
  };

  // Render a single image carousel
  const renderImageCarousel = (group, title) => {
    const images = groupedImages[group];
    if (!images || images.length === 0) return null;
    
    return (
      <div className="iteration-section">
        <h4>{title}</h4>
        <div className="work-images-container">
          {images.length > 1 && (
            <button 
              className="image-nav-button prev-button" 
              onClick={() => goToPrevImage(group)}
              aria-label="Previous image"
            >
              <span>←</span>
            </button>
          )}
          <div className="work-image-item">
            <img 
              src={images[currentImageIndices[group] || 0].url} 
              alt={images[currentImageIndices[group] || 0].title} 
              className="work-image-preview" 
            />
            {images[currentImageIndices[group] || 0].caption && (
              <p className="image-caption">{images[currentImageIndices[group] || 0].caption}</p>
            )}
            {images.length > 1 && (
              <div className="image-counter">
                {(currentImageIndices[group] || 0) + 1} / {images.length}
              </div>
            )}
          </div>
          {images.length > 1 && (
            <button 
              className="image-nav-button next-button" 
              onClick={() => goToNextImage(group)}
              aria-label="Next image"
            >
              <span>→</span>
            </button>
          )}
        </div>
      </div>
    );
  };

  // Define external links for each work item
  const externalLinks = {
    'react-portfolio': {
      text: 'View GitHub Repository',
      url: 'https://github.com/JonasWesselius/Portfolio-Space',
      icon: '🔗'
    },
    'woodworks': {
      text: 'View GitHub Repository',
      url: 'https://github.com/JonasWesselius/Woodworks',
      icon: '🔗'
    },
    'brandguide-studio': {
      text: 'View Figma Design',
      url: 'https://www.figma.com/design/zNRZdl8VHP0QpYVRtsa54f/Frontyard-Boys?node-id=0-1&t=lUU0BWCFBXjeVeNq-1',
      icon: '🎨'
    },
    'research-methods': {
      text: 'View Research PDF',
      url: '/src/assets/work/research/research-document.pdf',
      icon: '📄'
    },
    'mockup-project': {
      text: 'View Figma Design',
      url: 'https://www.figma.com/design/7Dh8gsyOB6TyrTf6xv3fWP/StepUp-Wireframes?node-id=0-1&t=XpN5c1axcYY7ivw3-1',
      icon: '🎨'
    },
  };

  return (
    <div className={`work-detail ${className}`}>
      <button className="back-button" onClick={onBack}>
        <span>←</span> Back
      </button>
      
      <div className="work-detail-content">
        <h2>{title}</h2>
        
        {/* Add external link button if available */}
        {externalLinks[workId] && (
          <a 
            href={externalLinks[workId].url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="external-link-button"
          >
            <span>{externalLinks[workId].icon}</span> {externalLinks[workId].text}
          </a>
        )}
        
        <div className="work-description">
          <p>{content.description}</p>
          
          {/* Process section moved up and integrated with images */}
          <h3>Process & Iterations</h3>
          <div className="process-section">
            <p>{content.process}</p>
            
            {/* Show images grouped by iteration */}
            {content.images && content.images.length > 0 && (
              <div className="process-images">
                {Object.keys(groupedImages).map(group => {
                  // Convert folder names to display titles
                  const displayTitles = {
                    'iteration1': 'Initial Iteration',
                    'iteration2': 'Second Iteration',
                    'iteration3': 'Third Iteration',
                    'final': 'Final Version',
                    'wireframes': 'Wireframes',
                    'mockUps': 'Design Mockups'
                  };
                  return renderImageCarousel(group, displayTitles[group] || group);
                })}
              </div>
            )}
          </div>

          {/* Learning Outcomes section */}
          <h3>Learning Outcomes</h3>
          <div className="learning-outcomes-container">
            {content.learningOutcomes && content.learningOutcomes.map((outcome, index) => (
              <div 
                key={index} 
                className="learning-outcome-item"
                data-outcome-id={outcome.id}
              >
                <div className="learning-outcome-header">
                  <span className="learning-outcome-section">{learningOutcomeSections[outcome.id] || outcome.id}</span>
                </div>
                <h4>{outcome.title}</h4>
                <p>{outcome.explanation}</p>
              </div>
            ))}
          </div>

          {/* Technologies and Learning Points moved to the end */}
          <h3>Technologies Used</h3>
          <ul>
            {content.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <h3>Key Learning Points</h3>
          <ul>
            {content.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          {/* User Testing section if available */}
          {content.userTesting && (
            <>
              <h3>User Testing</h3>
              <div className="user-testing-section">
                {content.userTesting.video && (
                  <div className="user-testing-video" style={{ marginBottom: '1.5rem' }}>
                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${content.userTesting.video.split('v=')[1]?.split('&')[0]}`}
                      title="User Test Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ maxWidth: '100%', borderRadius: '12px' }}
                    ></iframe>
                  </div>
                )}
                <h4>Tasks</h4>
                <ul>
                  {content.userTesting.tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
                <h4>Results</h4>
                <p>{content.userTesting.results}</p>
                <h4>Feedback</h4>
                <ul>
                  {content.userTesting.feedback.map((fb, idx) => (
                    <li key={idx}>{fb}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Add Interview Audio Players if available */}
          {content.interviews && content.interviews.length > 0 && (
            <>
              <h3>Research Interviews</h3>
              <div className="interviews-section">
                {content.interviews.map((interview, index) => (
                  <AudioPlayer 
                    key={index}
                    audioUrl={interview.url}
                    title={interview.title}
                    description={interview.description}
                  />
                ))}
              </div>
            </>
          )}
          
          {/* Add Resources if available */}
          {content.resources && content.resources.length > 0 && (
            <>
              <h3>Additional Resources</h3>
              <div className="resources-section">
                {content.resources.map((resource, index) => (
                  <div key={index} className="resource-item">
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resource-link"
                    >
                      <span className="resource-icon">
                        {resource.type === 'pdf' ? '📄' : '🔗'}
                      </span>
                      <div className="resource-info">
                        <h4>{resource.title}</h4>
                        <p>{resource.description}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

WorkDetail.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  className: PropTypes.string,
  workId: PropTypes.string.isRequired,
  activeFilter: PropTypes.string
};

export default WorkDetail; 