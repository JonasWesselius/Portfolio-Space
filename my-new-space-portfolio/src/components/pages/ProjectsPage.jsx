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
          </ul>
        </div>
      </>
    )
  },
  1: {
    title: "Research Phase",
    content: (
      <>
        <h2>User Research</h2>
        <p>We&apos;ve conducted extensive research to understand the needs and challenges of both refugees and employers in the Dutch job market.</p>
        <div className="research-methods">
          <h3>Research Methods</h3>
          <ul>
            <li>On-site visits to asylum centers</li>
            <li>In-depth interviews with refugees</li>
            <li>Employer focus groups</li>
            <li>Market analysis of existing solutions</li>
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
    title: "Concept Development",
    content: (
      <>
        <h2>Solution Design</h2>
        <p>Based on our research findings, we&apos;ve developed a comprehensive concept that addresses the key challenges identified in our user research.</p>
        <div className="concept-details">
          <h3>Core Concept Elements</h3>
          <ul>
            <li>Intuitive multilingual interface</li>
            <li>Personalized integration roadmap</li>
            <li>Skill assessment and matching system</li>
            <li>Cultural competency training modules</li>
            <li>Progress tracking and milestone system</li>
            <li>Employer-employee matching algorithm</li>
          </ul>
        </div>
        <div className="user-journey">
          <h3>User Journey Highlights</h3>
          <ul>
            <li>Initial assessment of skills and language level</li>
            <li>Personalized learning path creation</li>
            <li>Interactive cultural orientation</li>
            <li>Resume building with translation support</li>
            <li>Job matching and application process</li>
            <li>Integration progress monitoring</li>
          </ul>
        </div>
      </>
    )
  },
  3: {
    title: "Current Status",
    content: (
      <>
        <h2>Project Phase</h2>
        <p>We&apos;re currently in the concepting phase, preparing to present our research findings and proposed solution through a poster presentation next week.</p>
        <div className="current-focus">
          <h3>Current Activities</h3>
          <ul>
            <li>Finalizing research documentation</li>
            <li>Creating visual presentation materials</li>
            <li>Refining the concept based on feedback</li>
            <li>Preparing stakeholder presentation</li>
            <li>Documenting user research insights</li>
            <li>Developing concept validation plan</li>
          </ul>
        </div>
        <div className="next-steps">
          <h3>Next Steps</h3>
          <ul>
            <li>Poster presentation to stakeholders</li>
            <li>Gathering feedback on the concept</li>
            <li>Planning prototype development</li>
            <li>Defining technical requirements</li>
            <li>Creating development roadmap</li>
            <li>Setting up project timeline</li>
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