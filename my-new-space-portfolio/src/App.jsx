import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import ProjectsPage from './components/pages/ProjectsPage'
import LearningPage from './components/pages/LearningPage'
import BottomNav from './components/navigation/BottomNav'
import './styles/variables.css'
import './styles/animations.css'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  return (
    <Router>
      <div className="app-container">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'projects' && <ProjectsPage onNavigate={handleNavigate} />}
        {currentPage === 'learning' && <LearningPage onNavigate={handleNavigate} />}
        <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />
      </div>
    </Router>
  )
}

export default App
