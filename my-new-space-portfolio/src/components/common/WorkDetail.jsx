import PropTypes from 'prop-types';
import './WorkDetail.css';
import { reactPortfolioWork } from '../work/reactPortfolio';
import { brandguideStudioWork } from '../work/brandguideStudio';
import { studioLogosWork } from '../work/studioLogos';
import { reactNativeAppWork } from '../work/reactNativeApp';
import { wireframingWork } from '../work/wireframing';
import { researchMethodsWork } from '../work/researchMethods';

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
  const content = workContent[workId] || {
    description: "Detailed description of the work...",
    learningPoints: ["Point 1", "Point 2", "Point 3"],
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    learningOutcome: "Learning outcome description...",
    learningOutcomes: [],
    process: "Process description..."
  };

  return (
    <div className={`work-detail ${className}`}>
      <button className="back-button" onClick={onBack}>
        <span>↑</span> Back to Learning Outcomes
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