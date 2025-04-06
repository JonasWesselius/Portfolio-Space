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
  'woodworks': woodworksWork
};

// Map learning outcome IDs to their section names
const learningOutcomeSections = {
  'media-products': 'Media Products',
  'process-documentation': 'Development',
  'iterations': 'Iterative Design',
  'professional': 'Professionalism',
  'personal': 'Personal'
};

function WorkDetail({ title, onBack, className, workId }) {
  const [currentImageIndices, setCurrentImageIndices] = useState({});
  const [groupedImages, setGroupedImages] = useState({});
  
  const content = workContent[workId] || {
    description: "Detailed description of the work...",
    learningPoints: ["Point 1", "Point 2", "Point 3"],
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    learningOutcome: "Learning outcome description...",
    learningOutcomes: [],
    process: "Process description...",
    images: []
  };
  
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
    }
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
          
          <h3>Learning Outcome</h3>
          <p className="learning-outcome">{content.learningOutcome}</p>
          
          <h3>Learning Outcomes</h3>
          <div className="learning-outcomes-container">
            {content.learningOutcomes && content.learningOutcomes.map((outcome, index) => (
              <div key={index} className="learning-outcome-item">
                <div className="learning-outcome-header">
                  <span className="learning-outcome-section">{learningOutcomeSections[outcome.id] || outcome.id}</span>
                </div>
                <h4>{outcome.title}</h4>
                <p>{outcome.explanation}</p>
              </div>
            ))}
          </div>
          
          <h3>Process</h3>
          <div className="process-section">
            <p>{content.process}</p>
          </div>
          
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
          
          <h3>Key Learning Points</h3>
          <ul>
            {content.learningPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          
          <h3>Technologies Used</h3>
          <ul>
            {content.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          
          {content.images && content.images.length > 0 && (
            <>
              <h3>Work Images</h3>
              {Object.keys(groupedImages).map(group => {
                // Convert folder names to display titles
                const displayTitles = {
                  'iteration1': 'Iteration 1',
                  'iteration2': 'Iteration 2',
                  'final': 'Final Version',
                  'wireframes': 'Wireframes',
                  'mockUps': 'Design Mockups'
                };
                return renderImageCarousel(group, displayTitles[group] || group);
              })}
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
  workId: PropTypes.string.isRequired
};

export default WorkDetail; 