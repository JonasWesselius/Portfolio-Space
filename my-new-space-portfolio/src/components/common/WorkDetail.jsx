import { useState } from 'react';
import PropTypes from 'prop-types';
import { reactPortfolioWork } from '../work/reactPortfolio';
import { brandguideStudioWork } from '../work/brandguideStudio';
import { studioLogosWork } from '../work/studioLogos';
import { reactNativeAppWork } from '../work/reactNativeApp';
import { wireframingWork } from '../work/wireframing';
import { researchMethodsWork } from '../work/researchMethods';
import './WorkDetail.css';

const workContent = {
  'react-portfolio': reactPortfolioWork,
  'brandguide-studio': brandguideStudioWork,
  'studio-logos': studioLogosWork,
  'react-native-app': reactNativeAppWork,
  'wireframing': wireframingWork,
  'research-methods': researchMethodsWork
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
  // Initialize currentImageIndices state
  const [currentImageIndices, setCurrentImageIndices] = useState({
    iteration1: 0,
    iteration2: 0,
    final: 0
  });
  
  const content = workContent[workId] || {
    description: "Detailed description of the work...",
    learningPoints: ["Point 1", "Point 2", "Point 3"],
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    learningOutcome: "Learning outcome description...",
    learningOutcomes: [],
    process: "Process description...",
    images: []
  };
  
  // Group images by iteration
  const groupedImages = {
    iteration1: content.images.filter(img => img.url.includes('iteration1')),
    iteration2: content.images.filter(img => img.url.includes('iteration2')),
    final: content.images.filter(img => img.url.includes('final'))
  };
  
  // Navigation functions for each iteration
  const goToNextImage = (iteration) => {
    if (groupedImages[iteration] && groupedImages[iteration].length > 0) {
      setCurrentImageIndices(prev => ({
        ...prev,
        [iteration]: prev[iteration] === groupedImages[iteration].length - 1 ? 0 : prev[iteration] + 1
      }));
    }
  };
  
  const goToPrevImage = (iteration) => {
    if (groupedImages[iteration] && groupedImages[iteration].length > 0) {
      setCurrentImageIndices(prev => ({
        ...prev,
        [iteration]: prev[iteration] === 0 ? groupedImages[iteration].length - 1 : prev[iteration] - 1
      }));
    }
  };
  
  // Render a single image carousel
  const renderImageCarousel = (iteration, title) => {
    const images = groupedImages[iteration];
    if (!images || images.length === 0) return null;
    
    return (
      <div className="iteration-section">
        <h4>{title}</h4>
        <div className="work-images-container">
          {images.length > 1 && (
            <>
              <button 
                className="image-nav-button prev-button" 
                onClick={() => goToPrevImage(iteration)}
                aria-label="Previous image"
              >
                <span>←</span>
              </button>
            </>
          )}
          <div className="work-image-item">
            {images[currentImageIndices[iteration]].type === 'pdf' ? (
              <a href={images[currentImageIndices[iteration]].url} target="_blank" rel="noopener noreferrer" className="pdf-link">
                <div className="pdf-preview">
                  <span className="pdf-icon">📄</span>
                  <span className="pdf-title">{images[currentImageIndices[iteration]].title || 'View PDF'}</span>
                </div>
              </a>
            ) : (
              <img 
                src={images[currentImageIndices[iteration]].url} 
                alt={images[currentImageIndices[iteration]].title || 'Work image'} 
                className="work-image-preview" 
              />
            )}
            {images[currentImageIndices[iteration]].caption && (
              <p className="image-caption">{images[currentImageIndices[iteration]].caption}</p>
            )}
            {images.length > 1 && (
              <div className="image-counter">
                {currentImageIndices[iteration] + 1} / {images.length}
              </div>
            )}
          </div>
          {images.length > 1 && (
            <>
              <button 
                className="image-nav-button next-button" 
                onClick={() => goToNextImage(iteration)}
                aria-label="Next image"
              >
                <span>→</span>
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <div className={`work-detail ${className}`}>
      <button className="back-button" onClick={onBack}>
        <span>←</span> Back
      </button>
      
      <div className="work-detail-content">
        <h2>{title}</h2>
        
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
              
              {/* Render separate carousels for each iteration */}
              {renderImageCarousel('iteration1', 'Iteration 1')}
              {renderImageCarousel('iteration2', 'Iteration 2')}
              {renderImageCarousel('final', 'Final Version')}
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