import { useState } from 'react'
import HomePage from './components/HomePage'
import ProjectsPage from './components/ProjectsPage'
import LearningPage from './components/LearningPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [slideDirection, setSlideDirection] = useState(null)

  const handlePageChange = (direction) => {
    if (direction === 'home') {
      // Going back to home, set slide direction based on current page
      setSlideDirection(currentPage === 'projects' ? 'right' : 'left')
      setTimeout(() => {
        setCurrentPage('home')
        setSlideDirection(null)
      }, 800)
    } else if (currentPage === 'home') {
      // Going from home to another page
      setSlideDirection(direction)
      if (direction === 'left') {
        setCurrentPage('projects')
      } else if (direction === 'right') {
        setCurrentPage('learning')
      }
    }
  }

  return (
    <div className="app-container">
      <div className={`page-container ${slideDirection ? `slide-${slideDirection}` : ''}`}>
        <ProjectsPage visible={currentPage === 'projects'} onNavigate={handlePageChange} />
        <HomePage onNavigate={handlePageChange} currentPage={currentPage} />
        <LearningPage visible={currentPage === 'learning'} />
      </div>
    </div>
  )
}

export default App
