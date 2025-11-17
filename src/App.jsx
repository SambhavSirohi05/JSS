import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import Faculty from './pages/Faculty'
import FacultyProfile from './pages/FacultyProfile'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedFacultyId, setSelectedFacultyId] = useState(null)

  // Update document title based on current page
  useEffect(() => {
    const getPageTitle = (page) => {
      switch (page) {
        case 'faculty':
          return 'Faculty - JSS Academy of Technical Education'
        case 'faculty-profile':
          return 'Faculty Profile - JSS Academy of Technical Education'
        case 'about':
          return 'About - JSS Academy of Technical Education'
        case 'contact':
          return 'Contact - JSS Academy of Technical Education'
        case 'home':
        default:
          return 'JSS Academy of Technical Education - IT Department'
      }
    }

    document.title = getPageTitle(currentPage)
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'faculty':
        return (
          <Faculty
            onBack={() => setCurrentPage('home')}
            onFacultyProfile={(facultyId) => {
              setSelectedFacultyId(facultyId)
              setCurrentPage('faculty-profile')
            }}
          />
        )
      case 'faculty-profile':
        return (
          <FacultyProfile
            onBack={() => setCurrentPage('faculty')}
            facultyId={selectedFacultyId}
          />
        )
      case 'about':
        return <About onBack={() => setCurrentPage('home')} />
      case 'contact':
        return <Contact onBack={() => setCurrentPage('home')} />
      default:
        return (
          <Home
            onFaculty={() => setCurrentPage('faculty')}
            onAbout={() => setCurrentPage('about')}
            onDepartments={() => setCurrentPage('about')}
            onContact={() => setCurrentPage('contact')}
          />
        )
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  )
}

export default App
