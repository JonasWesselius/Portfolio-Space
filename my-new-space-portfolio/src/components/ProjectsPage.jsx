import './ProjectsPage.css';
import PropTypes from 'prop-types';
import moonImg from '../assets/moon.png';

const sectionContent = {
  0: {
    title: "Introduction",
    content: (
      <>
        <p>Welcome to my portfolio project! This is a space-themed portfolio website built with React, showcasing my skills in frontend development and design.</p>
        <h2>Project Overview</h2>
        <p>The goal of this project was to create an interactive and visually engaging portfolio that demonstrates both my technical abilities and creative approach to web development.</p>
        <div className="project-features">
          <h3>Key Features</h3>
          <ul>
            <li>Space-themed design with interactive elements</li>
            <li>Smooth transitions and animations</li>
            <li>Responsive layout for all devices</li>
            <li>React-based architecture</li>
            <li>Modern UI/UX principles</li>
          </ul>
        </div>
        <h2>Design Philosophy</h2>
        <p>The space theme wasn&apos;t just chosen for its visual appeal. It represents the vast possibilities in web development and my journey exploring this digital universe. Each element has been carefully crafted to create an immersive experience.</p>
        <h3>Visual Elements</h3>
        <ul>
          <li>Dynamic star field background</li>
          <li>Interactive moon navigation</li>
          <li>Constellation-inspired layouts</li>
          <li>Smooth parallax effects</li>
        </ul>
        <h3>Technical Implementation</h3>
        <p>The website leverages modern web technologies and best practices:</p>
        <ul>
          <li>React hooks for state management</li>
          <li>CSS animations and transitions</li>
          <li>Responsive design principles</li>
          <li>Optimized performance</li>
        </ul>
      </>
    )
  },
  1: {
    title: "Getting Started",
    content: (
      <>
        <h2>Project Setup</h2>
        <p>The journey began with careful planning and setup of the development environment. Key decisions were made regarding:</p>
        <ul>
          <li>React as the primary framework</li>
          <li>Modern build tools and dependencies</li>
          <li>Project structure and organization</li>
        </ul>
        <h2>Initial Planning</h2>
        <p>Before diving into development, significant time was spent on planning and conceptualization:</p>
        <h3>Research Phase</h3>
        <ul>
          <li>Analyzing similar portfolio websites</li>
          <li>Identifying unique selling points</li>
          <li>Studying space-themed designs</li>
          <li>Evaluating technical requirements</li>
        </ul>
        <h3>Technical Decisions</h3>
        <p>Several key technical decisions were made early in the project:</p>
        <ul>
          <li>Using Vite for faster development</li>
          <li>Implementing CSS modules for styling</li>
          <li>Setting up ESLint and Prettier</li>
          <li>Planning the component hierarchy</li>
        </ul>
        <h2>Development Environment</h2>
        <p>The development environment was set up with the following tools and configurations:</p>
        <ul>
          <li>VS Code with custom extensions</li>
          <li>Git for version control</li>
          <li>npm for package management</li>
          <li>Chrome DevTools for debugging</li>
        </ul>
      </>
    )
  },
  2: {
    title: "Research",
    content: (
      <>
        <h2>Research Process</h2>
        <p>Extensive research was conducted to ensure the project would stand out while meeting modern web standards:</p>
        <h3>Market Analysis</h3>
        <ul>
          <li>Studied 50+ developer portfolios</li>
          <li>Analyzed common patterns and unique features</li>
          <li>Identified gaps and opportunities</li>
        </ul>
        <h3>Technical Research</h3>
        <p>Deep dive into modern web technologies and best practices:</p>
        <ul>
          <li>Performance optimization techniques</li>
          <li>Animation libraries and approaches</li>
          <li>State management solutions</li>
          <li>Accessibility standards</li>
        </ul>
        <h2>User Research</h2>
        <p>Understanding the target audience was crucial:</p>
        <h3>Target Audience</h3>
        <ul>
          <li>Potential employers</li>
          <li>Fellow developers</li>
          <li>Design enthusiasts</li>
          <li>Project collaborators</li>
        </ul>
        <h3>User Needs</h3>
        <p>Key findings from user research:</p>
        <ul>
          <li>Clear presentation of skills</li>
          <li>Easy navigation between sections</li>
          <li>Engaging visual experience</li>
          <li>Mobile-friendly design</li>
        </ul>
      </>
    )
  }
  // Additional sections will be added similarly
};

function ProjectsPage({ onNavigate }) {
  const handleMoonClick = () => {
    const moon = document.querySelector('.projects-page .moon');
    moon.classList.add('sliding-right');
    
    setTimeout(() => {
      onNavigate('home');
    }, 400);
  };

  return (
    <div className="projects-page">
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