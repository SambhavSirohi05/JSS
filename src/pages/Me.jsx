import React, { useState, useEffect, useRef } from 'react'
import { ArrowLeft, User, Code, Cpu, Briefcase, Mail, FileText, Award, BookOpen, Heart, MapPin, Calendar, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import Prism from '../components/Prism'

const Me = ({ onBack }) => {
  const [greeting, setGreeting] = useState('')
  const chatContainerRef = useRef(null)

  // Time-based greeting
  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours()
      if (hour < 12) return 'Good morning'
      if (hour < 17) return 'Good afternoon'
      return 'Good evening'
    }
    setGreeting(getGreeting())
  }, [])

  // Skills data
  const skills = [
    { name: 'React', level: 90, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
    { name: 'Python', level: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'Machine Learning', level: 75, color: 'from-pink-400 to-pink-600' },
    { name: 'Web Development', level: 90, color: 'from-indigo-400 to-indigo-600' }
  ]

  // Experience data
  const experience = [
    {
      title: 'Software Engineer',
      company: 'TechCorp',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      type: 'Full-time'
    },
    {
      title: 'AI Research Intern',
      company: 'InnovateLabs',
      period: '2021 - 2022',
      description: 'Conducted research on machine learning algorithms and developed AI-powered applications. Published 2 research papers in top-tier conferences.',
      type: 'Internship'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description: 'Built responsive web applications and improved user experience. Worked with modern frameworks and libraries to create engaging interfaces.',
      type: 'Contract'
    }
  ]

  // Education data
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2018 - 2022',
      gpa: '3.8/4.0',
      description: 'Specialized in Artificial Intelligence and Software Engineering. Completed capstone project on machine learning applications.'
    },
    {
      degree: 'High School Diploma',
      school: 'Tech High School',
      period: '2014 - 2018',
      gpa: '3.9/4.0',
      description: 'Graduated with honors. Active in robotics club and programming competitions.'
    }
  ]

  // Interests data
  const interests = [
    { name: 'Photography', icon: '📸', description: 'Capturing moments and exploring creative perspectives' },
    { name: 'Gaming', icon: '🎮', description: 'Strategy games and indie development' },
    { name: 'Music', icon: '🎵', description: 'Playing guitar and discovering new artists' },
    { name: 'Travel', icon: '✈️', description: 'Exploring new cultures and cuisines' },
    { name: 'Reading', icon: '📚', description: 'Tech blogs, sci-fi novels, and self-improvement' },
    { name: 'Fitness', icon: '💪', description: 'Running, hiking, and staying active' }
  ]

  // Achievements data
  const achievements = [
    {
      title: 'Hackathon Winner',
      organization: 'TechFest 2023',
      year: '2023',
      description: 'First place in AI/ML category for innovative chatbot solution'
    },
    {
      title: 'Open Source Contributor',
      organization: 'React Community',
      year: '2022',
      description: 'Contributed to major React libraries with 500+ GitHub stars'
    },
    {
      title: 'Certified Developer',
      organization: 'AWS',
      year: '2021',
      description: 'AWS Solutions Architect Associate certification'
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
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-3 font-light">
              {greeting}, I'm <span className="font-medium text-gray-900">Sambhav Sirohi</span>
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk">
              About
            </h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <User className="w-12 h-12 text-gray-700" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pointer-events-auto">
            
            {/* Left Column */}
            <div className="space-y-8">
              
              {/* Personal Info */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <User className="w-6 h-6" />
                  Personal Information
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">📍 San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">🎂 25 years old</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">sambhav@example.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">github.com/sambhavsirohi</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Cpu className="w-6 h-6" />
                  Technical Skills
                </h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  Interests & Hobbies
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="text-2xl mb-2">{interest.icon}</div>
                      <h3 className="font-medium text-gray-900 text-sm">{interest.name}</h3>
                      <p className="text-xs text-gray-600 mt-1">{interest.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              
              {/* Bio */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  About
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm a passionate software engineer with a love for creating innovative solutions and 
                  solving complex problems. With expertise in modern web technologies and a keen interest 
                  in artificial intelligence, I enjoy building applications that make a real difference.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or pursuing my hobbies. I believe in continuous learning and staying up-to-date 
                  with the latest trends in technology.
                </p>
              </div>

              {/* Experience */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  Experience
                </h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium text-sm mb-1">{exp.company}</p>
                      <p className="text-gray-500 text-xs mb-2">{exp.period}</p>
                      <p className="text-gray-700 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Education
                </h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600 font-medium text-sm mb-1">{edu.school}</p>
                      <p className="text-gray-500 text-xs mb-2">{edu.period} • GPA: {edu.gpa}</p>
                      <p className="text-gray-700 text-sm">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Achievements
                </h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                      <Award className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">{achievement.title}</h3>
                        <p className="text-gray-600 text-xs">{achievement.organization} • {achievement.year}</p>
                        <p className="text-gray-700 text-xs mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me
