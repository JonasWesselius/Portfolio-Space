import { useState } from 'react'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'
import LearningPage from './components/LearningPage'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePageChange = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true)
    
    let newPage = direction
    if (direction === 'left') {
      newPage = 'projects'
    } else if (direction === 'right') {
      newPage = 'learning'
    }
    
    setCurrentPage(newPage)
    
    // Reset transition state after slide completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800)
  }

  return (
    <div className="app-container">
      <div className={`page-wrapper ${isTransitioning ? 'transitioning' : ''}`} data-page={currentPage}>
        <ProjectsPage onNavigate={handlePageChange} />
        <HomePage onNavigate={handlePageChange} currentPage={currentPage} />
        <LearningPage onNavigate={handlePageChange} />
      </div>
      <Navigation currentPage={currentPage} onNavigate={handlePageChange} />
    </div>
  )
}

export default App
