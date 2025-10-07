import React from 'react'
import { ArrowLeft, User, Code, Cpu, Briefcase, Mail, FileText, Award, BookOpen, Heart, MapPin, Calendar, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import Prism from '../components/Prism'

const Retr0About = ({ onBack }) => {
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
      title: 'Senior Software Engineer',
      company: 'CyberTech Solutions',
      period: 'Jan 2022 - Present',
      description: 'Leading development of cutting-edge cybersecurity applications and mentoring junior developers. Specialized in building secure, scalable systems.'
    },
    {
      title: 'AI Research Intern',
      company: 'QuantumLabs',
      period: 'Summer 2021',
      description: 'Conducted advanced research on quantum machine learning and neural network optimization. Contributed to breakthrough algorithms in AI security.'
    }
  ]

  // Education data
  const education = [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'Tech University',
      period: '2018 - 2022',
      details: 'Graduated with honors. Focused on AI, Cybersecurity, and Advanced Web Development.'
    },
    {
      degree: 'High School Diploma',
      institution: 'Digital High School',
      period: '2014 - 2018',
      details: 'Achieved top grades in Mathematics and Computer Science.'
    }
  ]

  // Interests data
  const interests = [
    { icon: Award, label: 'Cybersecurity' },
    { icon: BookOpen, label: 'Quantum Computing' },
    { icon: Heart, label: 'Gaming' },
    { icon: Code, label: 'Open Source' },
    { icon: Mail, label: 'Travel' },
    { icon: Cpu, label: 'AI Ethics' }
  ]

  // Achievements data
  const achievements = [
    'Won 1st place in National Cyber Security Hackathon 2023',
    'Published research paper on Quantum AI in Journal of Future Tech',
    'AWS Certified Security Specialist',
    'Contributed to 10+ open-source security projects'
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
              <p className="text-gray-300 mb-2 flex items-center gap-2"><User className="w-4 h-4" /> Retr0</p>
              <p className="text-gray-300 mb-2 flex items-center gap-2"><MapPin className="w-4 h-4" /> Digital Space</p>
              <p className="text-gray-300 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> 22 Years Old</p>
              <p className="text-gray-300 mb-2 flex items-center gap-2"><Mail className="w-4 h-4" /> retr0@example.com</p>
              <div className="flex gap-3 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Github className="w-5 h-5" /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Linkedin className="w-5 h-5" /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            {/* About / Bio */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">About Retr0</h2>
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Retr0, a passionate developer with a deep interest in cybersecurity and cutting-edge technologies. I love building innovative solutions and constantly exploring new frontiers in tech. My journey in the digital realm has been driven by curiosity and a desire to create secure, impactful applications. I specialize in crafting robust, efficient, and user-friendly experiences in the cyber world.
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
