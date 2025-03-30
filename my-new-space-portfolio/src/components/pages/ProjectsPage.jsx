import PropTypes from 'prop-types';
import Moon from '../common/Moon';
import StarryBackground from '../animations/StarryBackground';
import { sectionContent } from './ProjectsContent';
import './ProjectsPage.css';

function ProjectsPage({ onNavigate }) {
  const handleMoonClick = () => {
    // Add fade-out class to the page content
    const pageContent = document.querySelector('.page-content');
    if (pageContent) {
      pageContent.classList.add('fade-out');
    }
    
    setTimeout(() => {
      if (pageContent) {
        pageContent.classList.remove('fade-out');
      }
      onNavigate('home');
    }, 400);
  };

  return (
    <div className="projects-page">
      <StarryBackground />
      <div className="page-content">
        <h1 className="page-title">Portfolio Space</h1>
        <div className="project-content">
          <div className="section-content">
            <div className="content-wrapper">
              {Object.entries(sectionContent).map(([key, section]) => (
                <div key={key} className="section">
                  <h2 className="section-heading">{section.title}</h2>
                  <div className="project-description">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Moon position="right" onClick={handleMoonClick} />
    </div>
  );
}

ProjectsPage.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

export default ProjectsPage; 