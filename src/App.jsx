import React, { useState } from 'react'
import Home from './pages/Home'
import Retr0 from './pages/Retr0'
import About from './pages/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'retr0':
        return <Retr0 onBack={() => setCurrentPage('home')} />
      case 'about':
        return <About onBack={() => setCurrentPage('home')} />
      default:
        return <Home onRetr0={() => setCurrentPage('retr0')} onMe={() => setCurrentPage('about')} />
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  )
}

export default App
