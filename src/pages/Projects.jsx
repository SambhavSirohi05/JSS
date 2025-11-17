import React from 'react'
import { ArrowLeft, Code, ExternalLink, Calendar, Tag, User, Send, Bot, Loader2, Trophy, Mail, FileText } from 'lucide-react'
import Prism from '../components/Prism'

// Landing Page UI Component for project previews
const LandingPageUI = ({ scale = 0.3 }) => {
  const categoryButtons = [
    { icon: User, label: 'About', color: 'from-pink-400 to-rose-400' },
    { icon: Code, label: 'Projects', color: 'from-blue-400 to-cyan-400' },
    { icon: Trophy, label: 'Achievements', color: 'from-yellow-400 to-orange-400' },
    { icon: Mail, label: 'Contact', color: 'from-orange-400 to-amber-400' }
  ]

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      style={{ 
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${100 / scale}%`,
        height: `${100 / scale}%`
      }}
    >
      {/* Hero Section */}
      <div className="text-center p-4">
        <p className="text-sm text-gray-700 mb-2 font-light">
          Good morning, I'm <span className="font-medium text-gray-900">Sambhav Sirohi</span>
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-4 font-space-grotesk">
          Portfolio
        </h1>
        
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
              <User className="w-4 h-4 text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Input */}
      <div className="px-4 mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask me anything…"
            className="w-full px-3 py-2 pr-10 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder-gray-500 text-gray-800 text-sm"
          />
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300">
            <Send className="w-3 h-3 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 px-4">
        {categoryButtons.map((button, index) => {
          const IconComponent = button.icon
          return (
            <button
              key={index}
              className="group flex flex-col items-center gap-1 px-3 py-2 bg-white/80 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 min-w-[60px]"
            >
              <div className={`p-2 rounded-lg bg-gradient-to-br ${button.color} shadow-md`}>
                <IconComponent className="w-3 h-3 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-700">
                {button.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

const Projects = ({ onBack }) => {

  // Projects data
  const projects = [
    {
      title: 'AI Portfolio',
      description: 'Interactive AI-powered personal portfolio that uses AI to autonomously answer user and client queries about skills, projects, and experience.',
      image: '/portfolio-screenshot.png',
      useLandingUI: false, // Now using actual screenshot
      technologies: ['JavaScript', 'React.js', 'TailwindCSS', 'Groq API', 'GitHub Actions', 'Vercel'],
      status: 'Live',
      github: 'https://github.com/SambhavSirohi05',
      demo: 'https://sambhavsirohi.vercel.app',
      year: '2025'
    },
    {
      title: 'AuthentiFi',
      description: 'Blockchain-based credential verification platform where universities can issue verified certificates as soulbound NFTs, ensuring authenticity and preventing forgery.',
      image: '/authentifi-screenshot.png',
      useLandingUI: false,
      technologies: ['JavaScript', 'React.js', 'Solidity', 'Ether.js', 'TailwindCSS'],
      status: 'Live',
      github: 'https://github.com/SambhavSirohi05',
      demo: 'https://authenti-fi.vercel.app/',
      year: '2025'
    },
    {
      title: 'Chainlings Arena',
      description: 'Multiplayer crypto trading game featuring live crypto price tracking, automated scoring, and dynamic leaderboards with tiered reward distribution.',
      image: '/chainlings-screenshot.png',
      useLandingUI: false,
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'TailwindCSS', 'Framer Motion', 'CoinGecko API', 'Vercel'],
      status: 'Live',
      github: 'https://github.com/SambhavSirohi05',
      demo: 'https://chainlings-arena.vercel.app',
      year: '2025'
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Prism Background Animation */}
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="hover"
          timeScale={0.3}
          height={3.8}
          baseWidth={6.0}
          scale={3.5}
          hueShift={0.2}
          colorFrequency={1.5}
          noise={0.05}
          glow={1.8}
        />
      </div>
      
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4 text-gray-700 group-hover:text-gray-900" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-4 py-12 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk">
              Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work and side projects showcasing my skills and passion for development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pointer-events-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden rounded-t-2xl">
                  {project.useLandingUI ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <LandingPageUI scale={0.4} />
                    </div>
                  ) : project.image.startsWith('/') ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl">{project.image}</div>
                  )}
                  
                  <div className="absolute top-4 left-4">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects