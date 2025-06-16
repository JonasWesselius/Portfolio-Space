import './ProjectsPage.css';
import PropTypes from 'prop-types';
import moonImg from '../../assets/moon.png';

const sectionContent = {
  0: {
    title: "Introduction",
    content: (
      <>
        <p>Welcome to my portfolio! I&apos;m currently working with IMA Projects on a significant initiative to help refugees integrate into the Dutch job market and society.</p>
        <h2>Project Overview</h2>
        <p>This project aims to create a comprehensive digital platform that bridges the gap between refugees and Dutch employers, while providing essential tools and guidance for successful integration into Dutch society.</p>
        <div className="project-features">
          <h3>Proposed Features</h3>
          <ul>
            <li>Job matching platform connecting refugees with Dutch employers</li>
            <li>Multilingual resume builder (Dutch/English)</li>
            <li>Language assessment tests for both Dutch and English</li>
            <li>Step-by-step integration guide for the Netherlands</li>
            <li>Cultural orientation resources</li>
            <li>Professional development tracking</li>
            <li>Refugee and Employer based database for accounts</li>
          </ul>
        </div>
      </>
    )
  },
  1: {
    title: "Research & User Testing",
    content: (
      <>
        <h2>User Research & Testing</h2>
        <p>We conducted extensive research through interviews with refugees and user testing sessions to validate our concept and design decisions.</p>
        <div className="research-methods">
          <h3>Research Methods</h3>
          <ul>
          <li>On-site visits to asylum centers</li>  
          <li>Market analysis of existing solutions</li>
          <li>In-depth interviews with 7 refugees from various backgrounds</li>
            <li>User testing sessions with AI and refugee students</li>
            <li>Feedback collection from client and teachers</li>
            <li>Peer review sessions</li>
            <li>Integration process mapping</li>
            <li>Language barrier assessment</li>
          </ul>
        </div>
        <div className="key-findings">
          <h3>Key Findings</h3>
          <ul>
            <li>Language proficiency is a major barrier to employment</li>
            <li>Cultural differences affect job search strategies</li>
            <li>Limited access to professional networks</li>
            <li>Need for structured integration guidance</li>
            <li>Employers seek qualified candidates but face communication challenges</li>
            <li>Digital literacy varies among refugee populations</li>
          </ul>
        </div>
      </>
    )
  },
  2: {
    title: "Design & Development",
    content: (
      <>
        <h2>Design Process & Implementation</h2>
        <p>Our design process followed an iterative approach, starting with wireframes and evolving through multiple iterations based on user feedback.</p>
        <div className="design-process">
          <h3>Design Phases</h3>
          <ul>
            <li>Initial wireframes and concept validation</li>
            <li>High-fidelity mockups with user-centered design principles</li>
            <li>Interactive prototypes for user testing</li>
            <li>Iterative improvements based on feedback</li>
            <li>Final design system and component library</li>
            <li>PWA development with React</li>
          </ul>
        </div>
        <div className="development-highlights">
          <h3>Development Highlights</h3>
          <ul>
            <li>Progressive Web App (PWA) architecture</li>
            <li>Responsive design for mobile-first approach</li>
            <li>Multilingual support implementation</li>
            <li>Interactive CV builder development</li>
            <li>Job matching algorithm integration</li>
            <li>User progress tracking system</li>
          </ul>
        </div>
      </>
    )
  },
  3: {
    title: "Current Status",
    content: (
      <>
        <h2>Project Completion</h2>
        <p>The project is now in its final stages, with all major features implemented and only minor refinements remaining before the stakeholder presentation.</p>
        <div className="current-focus">
          <h3>Completed Milestones</h3>
          <ul>
            <li>Comprehensive user research and persona development</li>
            <li>Poster presentation of research findings</li>
            <li>Wireframe and mockup iterations</li>
            <li>User testing and feedback incorporation</li>
            <li>PWA development and feature implementation</li>
            <li>Multilingual support and responsive design</li>
            <li>Database integration for refugee and employer accounts</li>
          </ul>
        </div>
        <div className="next-steps">
          <h3>Final Steps</h3>
          <ul>
            <li>Resolve remaining technical issues</li>
            <li>Final performance optimization</li>
            <li>Prepare stakeholder presentation for Wednesday</li>
            <li>Documentation finalization</li>
          </ul>
        </div>
      </>
    )
  }
};

function ProjectsPage({ onNavigate }) {
  const handleMoonClick = () => {
    onNavigate('home');
  };

  return (
    <div className="projects-page">
      <div className="page-content">
        <h1 className="page-title">IMA Projects - Refugee Integration</h1>
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
      <div 
        className="moon right-moon"
        onClick={handleMoonClick} 
        style={{ backgroundImage: `url(${moonImg})` }}
      />
      <div className="nav-arrow right-arrow"></div>
    </div>
  );
}

ProjectsPage.propTypes = {
  onNavigate: PropTypes.func.isRequired
};

export default ProjectsPage; 