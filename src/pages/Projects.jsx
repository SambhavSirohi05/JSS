import React from 'react'
import { ArrowLeft, Code, ExternalLink, Github, Calendar, Tag, Star } from 'lucide-react'
import Prism from '../components/Prism'

const Projects = ({ onBack }) => {
  // Projects data
  const projects = [
    {
      title: 'AI Chatbot Platform',
      description: 'A full-stack web application that provides intelligent conversational AI capabilities with real-time messaging, user authentication, and analytics dashboard.',
      image: '🤖',
      technologies: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Socket.io'],
      status: 'Live',
      github: 'https://github.com/sambhavsirohi/ai-chatbot',
      demo: 'https://ai-chatbot-demo.com',
      featured: true,
      year: '2024'
    },
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing capabilities.',
      image: '🛒',
      technologies: ['React', 'TypeScript', 'Redux', 'Chart.js', 'Express'],
      status: 'Live',
      github: 'https://github.com/sambhavsirohi/ecommerce-dashboard',
      demo: 'https://ecommerce-demo.com',
      featured: true,
      year: '2023'
    },
    {
      title: 'Weather App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '🌤️',
      technologies: ['React', 'JavaScript', 'Weather API', 'CSS3'],
      status: 'Live',
      github: 'https://github.com/sambhavsirohi/weather-app',
      demo: 'https://weather-demo.com',
      featured: false,
      year: '2023'
    },
    {
      title: 'Task Management Tool',
      description: 'A collaborative task management application with team features, project tracking, and deadline management.',
      image: '📋',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'JWT'],
      status: 'In Development',
      github: 'https://github.com/sambhavsirohi/task-manager',
      demo: null,
      featured: false,
      year: '2024'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with interactive animations and AI integration.',
      image: '💼',
      technologies: ['React', 'TailwindCSS', 'Three.js', 'Groq API'],
      status: 'Live',
      github: 'https://github.com/sambhavsirohi/portfolio',
      demo: 'https://sambhavsirohi.com',
      featured: true,
      year: '2024'
    },
    {
      title: 'Data Visualization Tool',
      description: 'An interactive data visualization platform for creating charts, graphs, and dashboards from CSV data.',
      image: '📊',
      technologies: ['D3.js', 'React', 'Python', 'Pandas'],
      status: 'Live',
      github: 'https://github.com/sambhavsirohi/data-viz',
      demo: 'https://dataviz-demo.com',
      featured: false,
      year: '2023'
    }
  ]

  const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI/ML', 'Data Viz', 'Tools']

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
      <div className="fixed top-6 left-6 z-10">
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

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 pointer-events-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pointer-events-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                  <div className="text-6xl">{project.image}</div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </div>
                    </div>
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
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

          {/* Call to Action */}
          <div className="text-center mt-16 pointer-events-auto">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Interested in working together?
              </h2>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
