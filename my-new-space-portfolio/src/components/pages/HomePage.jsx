import './HomePage.css';
import PropTypes from 'prop-types';
import profileImg from '../../assets/profile.png';
import moonImg from '../../assets/moon.png';

const constellations = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', x: 0, y: 0 },
      { name: 'JavaScript', x: 30, y: 15 },
      { name: 'HTML', x: 45, y: -20 },
      { name: 'CSS', x: 60, y: 5 }
    ],
    position: { top: '15%', left: '45%' }
  },
  {
    name: 'Design',
    skills: [
      { name: 'Photoshop', x: 0, y: 0 },
      { name: 'Illustrator', x: 20, y: 30 },
      { name: 'InDesign', x: 50, y: 15 },
      { name: 'Figma', x: 35, y: -15 }
    ],
    position: { top: '25%', right: '75%' }
  },
  {
    name: 'Development',
    skills: [
      { name: 'TypeScript', x: 15, y: -25 },
      { name: 'Git', x: -20, y: -20 },
      { name: 'Next.js', x: 15, y: 20 },
      { name: 'Tailwind', x: 40, y: -5 }
    ],
    position: { top: '-30%', left: '25%' }
  }
];

function HomePage({ onNavigate, currentPage }) {
  const handleMoonClick = (direction) => {
    onNavigate(direction);
  };

  // More stars with varying speeds, positions and directions
  const shootingStars = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    delay: Math.random() * 4,
    top: Math.random() * 100,
    left: Math.random() * 100,
    angle: Math.random() * 360,
    speed: 6 + Math.random() * 4
  }));

  return (
    <div className={`home-page ${currentPage !== 'home' ? 'page-inactive' : ''}`}>
      {shootingStars.map(star => (
        <div 
          key={star.id}
          className="shooting-star"
          style={{
            '--delay': star.delay,
            '--star-top': star.top,
            '--star-left': star.left,
            '--angle': `${star.angle}deg`,
            '--speed': `${star.speed}s`
          }}
        />
      ))}
      
      <div className="moon left-moon" 
        onClick={() => handleMoonClick('left')} 
        style={{ backgroundImage: `url(${moonImg})` }}>
      </div>
      <div className="nav-arrow left-arrow"></div>
      
      <div className="content-container">
        <div className="profile-container">
          <div className="intro-text">
            <h1>Hi There,</h1>
            <div className="name-line">
              <span className="line"></span>
              <span className="dot"></span>
              <span>Jonas Wesselius</span>
            </div>
            <p>Front End Developer and Student at Fontys ICT</p>
          </div>
          <div className="profile-circle-container">
            <div className="profile-circle">
              <img src={profileImg} alt="Jonas Profile" className="profile-image" />
            </div>
          </div>
        </div>
        <div className="constellations">
          {constellations.map((constellation) => (
            <div 
              key={constellation.name}
              className="constellation"
              style={{
                ...constellation.position
              }}
            >
              <div className="constellation-name">{constellation.name}</div>
              <svg className="constellation-lines" viewBox="-30 -30 120 80">
                {constellation.skills.map((_, index) => {
                  if (index === constellation.skills.length - 1) return null;
                  const current = constellation.skills[index];
                  const next = constellation.skills[index + 1];
                  return (
                    <line
                      key={index}
                      x1={current.x}
                      y1={current.y}
                      x2={next.x}
                      y2={next.y}
                      className="constellation-line"
                    />
                  );
                })}
                {constellation.skills.map((skill, index) => (
                  <g key={index}>
                    <circle
                      cx={skill.x}
                      cy={skill.y}
                      r="2.5"
                      className="constellation-star"
                    />
                    <text
                      x={skill.x}
                      y={skill.y + 8}
                      className="constellation-label"
                    >
                      {skill.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div className="moon right-moon" 
        onClick={() => handleMoonClick('right')} 
        style={{ backgroundImage: `url(${moonImg})` }}>
      </div>
      <div className="nav-arrow right-arrow"></div>
    </div>
  );
}

HomePage.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired
};

export default HomePage;