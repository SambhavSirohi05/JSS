import React from 'react'
import { ArrowLeft, Code, ExternalLink, Github, Calendar, Tag, Star, Shield, Zap, Cpu } from 'lucide-react'
import Prism from '../components/Prism'

const Retr0Projects = ({ onBack }) => {
  // Projects data
  const projects = [
    {
      title: 'CyberGuard AI',
      description: 'An advanced AI-powered cybersecurity platform that provides real-time threat detection, automated response, and intelligent security analytics for enterprise environments.',
      image: '🛡️',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'WebSocket'],
      status: 'Live',
      github: 'https://github.com/retr0/cyberguard-ai',
      demo: 'https://cyberguard-demo.com',
      featured: true,
      year: '2024'
    },
    {
      title: 'QuantumVault',
      description: 'A next-generation secure storage solution using quantum encryption algorithms. Provides military-grade security for sensitive data and documents.',
      image: '🔐',
      technologies: ['Vue.js', 'TypeScript', 'Quantum.js', 'Rust', 'WebAssembly'],
      status: 'Live',
      github: 'https://github.com/retr0/quantumvault',
      demo: 'https://quantumvault-demo.com',
      featured: true,
      year: '2024'
    },
    {
      title: 'NeuralNet Dashboard',
      description: 'A comprehensive dashboard for monitoring and managing neural network training processes with real-time visualization and performance metrics.',
      image: '🧠',
      technologies: ['React', 'Python', 'D3.js', 'FastAPI', 'Redis'],
      status: 'Live',
      github: 'https://github.com/retr0/neuralnet-dashboard',
      demo: 'https://neuralnet-demo.com',
      featured: false,
      year: '2023'
    },
    {
      title: 'DarkWeb Scanner',
      description: 'An automated tool for scanning and monitoring dark web activities, providing threat intelligence and security insights.',
      image: '🌐',
      technologies: ['Python', 'Scrapy', 'PostgreSQL', 'Docker', 'Celery'],
      status: 'In Development',
      github: 'https://github.com/retr0/darkweb-scanner',
      demo: null,
      featured: false,
      year: '2024'
    },
    {
      title: 'Retr0 Portfolio',
      description: 'A cutting-edge portfolio website with AI integration, advanced animations, and cyberpunk aesthetics.',
      image: '💼',
      technologies: ['React', 'TailwindCSS', 'Three.js', 'Groq API', 'WebGL'],
      status: 'Live',
      github: 'https://github.com/retr0/portfolio',
      demo: 'https://retr0.dev',
      featured: true,
      year: '2024'
    },
    {
      title: 'CryptoVault',
      description: 'A secure cryptocurrency wallet with multi-signature support, hardware integration, and advanced security features.',
      image: '₿',
      technologies: ['React Native', 'Rust', 'Web3.js', 'Hardware Security'],
      status: 'Live',
      github: 'https://github.com/retr0/cryptovault',
      demo: 'https://cryptovault-demo.com',
      featured: false,
      year: '2023'
    }
  ]

  const categories = ['All', 'Cybersecurity', 'AI/ML', 'Blockchain', 'Web3', 'Tools']

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Prism Background Animation */}
      <div className="absolute inset-0 z-0">
        <Prism
          animationType="hover"
          timeScale={0.3}
          height={3.8}
          baseWidth={6.0}
          scale={4.0}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
        />
      </div>
      
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-10">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-gray-700 shadow-lg hover:bg-gray-900 transition-all duration-300 hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4 text-gray-300 group-hover:text-white" />
          <span className="text-sm font-medium text-gray-300 group-hover:text-white">Back</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen px-4 py-12 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              Projects
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A collection of my cutting-edge projects showcasing expertise in cybersecurity, AI, and advanced technologies.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 pointer-events-auto">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-purple-500 text-white shadow-lg' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:shadow-lg'
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
                className={`bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  project.featured ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
                }`}
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <div className="text-6xl">{project.image}</div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
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
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full font-medium"
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
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all duration-300 text-sm font-medium"
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
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-gray-300 mb-6">
                I'm always excited to work on cutting-edge projects and collaborate with innovative teams. 
                Whether you have a cybersecurity challenge or want to explore the latest in AI technology, 
                let's build something amazing together!
              </p>
              <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Retr0Projects
