import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import ProjectsPage from './components/pages/ProjectsPage'
import LearningPage from './components/pages/LearningPage'
import Navigation from './components/layouts/Navigation'
import './App.css'

// Wrapper component to handle page transitions
function PageWrapper() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Update current page based on URL
    const path = location.pathname.split('/')[1] || 'home'
    setCurrentPage(path)
  }, [location])

  const handlePageChange = (direction) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    
    let newPage
    if (typeof direction === 'string') {
      if (direction === 'left') {
        newPage = 'projects'
      } else if (direction === 'right') {
        newPage = 'learning'
      } else {
        newPage = direction
      }
    }
    
    // Navigate using React Router
    navigate(`/${newPage === 'home' ? '' : newPage}`)
    
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
        <LearningPage 
          onNavigate={handlePageChange}
          workPath={location.pathname.split('/')[2]}
        />
      </div>
      <Navigation currentPage={currentPage} onNavigate={handlePageChange} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PageWrapper />} />
      </Routes>
    </Router>
  )
}

export default App
