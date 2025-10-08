import React from 'react'
import { ArrowLeft, User, Code, Cpu, Briefcase, Mail, FileText, Award, BookOpen, Heart, MapPin, Calendar, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import Prism from '../components/Prism'

const Retr0About = ({ onBack }) => {
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
      description: 'Planning and organizing society activities and technical events for student engagement. Mentoring in Embedded and Robotics workshops, conducting sessions on Arduino Programming, sensor interfacing, and basic electronics.'
    }
  ]

  // Education data
  const education = [
    {
      degree: 'B. Tech IT',
      institution: 'J.S.S. Academy of Technical Education',
      period: 'Oct 2023 - Present',
      details: 'Currently pursuing Bachelor of Technology in Information Technology. Focused on modern web technologies, AI integration, and blockchain development.'
    },
    {
      degree: 'Class 12th - CBSE Board',
      institution: 'Seth Anandram Jaipuria School',
      period: 'Mar 2023',
      details: 'Completed higher secondary education with focus on science and mathematics.'
    },
    {
      degree: 'Class 10th - CBSE Board',
      institution: 'Seth Anandram Jaipuria School',
      period: 'Mar 2021',
      details: 'Completed secondary education with strong foundation in core subjects.'
    }
  ]

  // Interests data
  const interests = [
    { icon: Award, label: 'AI/ML Integration' },
    { icon: BookOpen, label: 'Blockchain' },
    { icon: Heart, label: 'Full-stack Development' },
    { icon: Code, label: 'Real-time Applications' },
    { icon: Mail, label: 'Technical Mentoring' },
    { icon: Cpu, label: 'Open Source' }
  ]

  // Achievements data
  const achievements = [
    'Successfully built and deployed 3 major full-stack projects',
    'Integrated AI capabilities into portfolio for autonomous client interaction',
    'Developed blockchain-based solution for credential verification',
    'Created real-time multiplayer gaming platform with crypto integration',
    'Active member of technical society with mentoring responsibilities'
  ]

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
      <div className="fixed top-6 left-6 z-50">
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
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
              About Retr0
            </h1>
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center">
                  <Code className="w-12 h-12 text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* About Me Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-auto">
            {/* Personal Information */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Personal Information</h2>
              <p className="text-gray-300 mb-2 flex items-center gap-2"><User className="w-4 h-4" /> Sambhav Sirohi</p>
              <p className="text-gray-300 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> Delhi, India</p>
              <p className="text-gray-300 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> B.Tech IT Student</p>
              <p className="text-gray-300 mb-2 flex items-center gap-2"><Mail className="w-4 h-4" /> sambhavsirohi05@gmail.com</p>
              <div className="flex gap-3 mt-4">
                <a href="https://github.com/SambhavSirohi05" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Github className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/sambhav-sirohi-49330516b/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Linkedin className="w-5 h-5" /></a>
                <a href="https://x.com/Retr06421" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            {/* About / Bio */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">About Retr0</h2>
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Retr0, an AI assistant representing Sambhav Sirohi, a passionate B.Tech IT student with expertise in AI integration, blockchain development, and full-stack web technologies. I help showcase Sambhav's innovative projects and technical skills. My knowledge spans across modern web development, AI/ML integration, and cutting-edge technologies that Sambhav works with.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-6 md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Technical Skills</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-4">
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <p className="text-gray-400 text-sm">{job.company} | {job.period}</p>
                    <p className="text-gray-300 mt-2 text-sm">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-purple-500 pl-4">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-gray-400 text-sm">{edu.institution} | {edu.period}</p>
                    <p className="text-gray-300 mt-2 text-sm">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Hobbies */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-6 md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Interests & Hobbies</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {interests.map((interest, index) => {
                  const IconComponent = interest.icon
                  return (
                    <div key={index} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-sm hover:bg-gray-700 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-purple-400 mb-2" />
                      <span className="text-sm font-medium text-gray-300">{interest.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-6 md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">Achievements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Retr0About
