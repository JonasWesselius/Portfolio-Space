import { useState } from 'react'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'
import LearningPage from './components/LearningPage'
import Navigation from './components/Navigation'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePageChange = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true)
    setTimeout(() => {
      if (direction === 'home') {
        setCurrentPage('home')
      } else if (direction === 'left') {
        setCurrentPage('projects')
      } else if (direction === 'right') {
        setCurrentPage('learning')
      }
      setIsTransitioning(false)
    }, 300) // Changed from 400 to 300 to match moon timing
  }

  const handleThemeChange = (theme) => {
    console.log('Theme changed to:', theme);
  };

  return (
    <div className="app-container">
      <ThemeToggle onThemeChange={handleThemeChange} />
      <div className={`page-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
        {currentPage === 'projects' && (
          <ProjectsPage onNavigate={handlePageChange} />
        )}
        {currentPage === 'home' && (
          <HomePage onNavigate={handlePageChange} currentPage={currentPage} />
        )}
        {currentPage === 'learning' && (
          <LearningPage onNavigate={handlePageChange} />
        )}
      </div>
      <Navigation currentPage={currentPage} onNavigate={handlePageChange} />
    </div>
  )
}

export default App
