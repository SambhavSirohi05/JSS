import React, { useState } from 'react'
import Home from './pages/Home'
import Retr0 from './pages/Retr0'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import Retr0About from './pages/Retr0About'
import Retr0Projects from './pages/Retr0Projects'
import Retr0Contact from './pages/Retr0Contact'
import Retr0Achievements from './pages/Retr0Achievements'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'retr0':
        return <Retr0 
          onBack={() => setCurrentPage('home')} 
          onAbout={() => setCurrentPage('retr0-about')}
          onProjects={() => setCurrentPage('retr0-projects')}
          onContact={() => setCurrentPage('retr0-contact')}
          onAchievements={() => setCurrentPage('retr0-achievements')}
        />
      case 'about':
        return <About onBack={() => setCurrentPage('home')} />
      case 'projects':
        return <Projects onBack={() => setCurrentPage('home')} />
      case 'contact':
        return <Contact onBack={() => setCurrentPage('home')} />
      case 'achievements':
        return <Achievements onBack={() => setCurrentPage('home')} />
      case 'retr0-about':
        return <Retr0About onBack={() => setCurrentPage('retr0')} />
      case 'retr0-projects':
        return <Retr0Projects onBack={() => setCurrentPage('retr0')} />
      case 'retr0-contact':
        return <Retr0Contact onBack={() => setCurrentPage('retr0')} />
      case 'retr0-achievements':
        return <Retr0Achievements onBack={() => setCurrentPage('retr0')} />
      default:
        return <Home 
          onRetr0={() => setCurrentPage('retr0')} 
          onAbout={() => setCurrentPage('about')}
          onProjects={() => setCurrentPage('projects')}
          onContact={() => setCurrentPage('contact')}
          onAchievements={() => setCurrentPage('achievements')}
        />
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  )
}

export default App
