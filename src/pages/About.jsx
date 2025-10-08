import React from 'react'
import { ArrowLeft, User, Code, Cpu, Briefcase, Mail, FileText, Award, BookOpen, Heart, MapPin, Calendar, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import Prism from '../components/Prism'

const About = ({ onBack }) => {

  // Skills data
  const skills = [
    { name: 'React.js', level: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Node.js', level: 90, color: 'from-green-400 to-green-600' },
    { name: 'Solidity', level: 85, color: 'from-purple-400 to-purple-600' },
    { name: 'AI/ML Integration', level: 90, color: 'from-pink-400 to-pink-600' },
    { name: 'MongoDB', level: 85, color: 'from-indigo-400 to-indigo-600' }
  ]

  // Experience data
  const experience = [
    {
      title: 'Member & Mentor',
      company: 'Quanta - Electronics and Communication Society',
      period: '2023 - Present',
      description: 'Planning and organizing society activities and technical events for student engagement. Mentoring in Embedded and Robotics workshops, conducting sessions on Arduino Programming, sensor interfacing, and basic electronics.',
      type: 'Society Member'
    }
  ]

  // Education data
  const education = [
    {
      degree: 'B. Tech IT',
      school: 'J.S.S. Academy of Technical Education',
      period: 'Oct 2023 - Present',
      gpa: 'Pursuing',
      description: 'Currently pursuing Bachelor of Technology in Information Technology. Focused on modern web technologies, AI integration, and blockchain development.'
    },
    {
      degree: 'Class 12th - CBSE Board',
      school: 'Seth Anandram Jaipuria School',
      period: 'Mar 2023',
      gpa: 'Completed',
      description: 'Completed higher secondary education with focus on science and mathematics.'
    },
    {
      degree: 'Class 10th - CBSE Board',
      school: 'Seth Anandram Jaipuria School',
      period: 'Mar 2021',
      gpa: 'Completed',
      description: 'Completed secondary education with strong foundation in core subjects.'
    }
  ]

  // Interests data
  const interests = [
    { name: 'AI/ML Integration', icon: '🤖', description: 'Large Language Models and AI-powered applications' },
    { name: 'Blockchain', icon: '⛓️', description: 'Web3 development and smart contract programming' },
    { name: 'Full-stack Development', icon: '💻', description: 'Building complete web applications' },
    { name: 'Real-time Applications', icon: '⚡', description: 'Live data processing and interactive systems' },
    { name: 'Technical Mentoring', icon: '👨‍🏫', description: 'Teaching and guiding fellow students' },
    { name: 'Open Source', icon: '🔧', description: 'Contributing to developer tools and libraries' }
  ]

  // Achievements data
  const achievements = [
    {
      title: 'AI Portfolio Project',
      organization: 'Personal Project',
      year: '2024',
      description: 'Successfully built and deployed AI-powered interactive portfolio with autonomous client interaction'
    },
    {
      title: 'AuthentiFi Platform',
      organization: 'Blockchain Project',
      year: '2024',
      description: 'Developed blockchain-based credential verification platform using soulbound NFTs'
    },
    {
      title: 'Chainlings Arena',
      organization: 'Gaming Project',
      year: '2024',
      description: 'Created real-time multiplayer crypto trading game with live price feeds'
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
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk">
              About Me
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
                    <span className="text-gray-700">📍 Delhi, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">🎓 B.Tech IT Student</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">sambhavsirohi@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">github.com/SambhavSirohi05</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">linkedin.com/in/sambhav-sirohi-49330516b</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Twitter className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">x.com/Retr06421</span>
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
                  I'm a passionate B.Tech IT student with a love for creating innovative solutions and 
                  solving complex problems. With expertise in modern web technologies, AI integration, 
                  and blockchain development, I enjoy building applications that make a real difference.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you'll find me mentoring fellow students in technical workshops, 
                  exploring new technologies, or working on exciting projects. I believe in continuous 
                  learning and staying up-to-date with the latest trends in technology.
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

export default About
