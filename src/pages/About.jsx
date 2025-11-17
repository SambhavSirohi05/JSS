import React from 'react'
import { ArrowLeft, Building2, GraduationCap, Award, BookOpen, Users, Target, Lightbulb, Globe } from 'lucide-react'
import Prism from '../components/Prism'

const About = ({ onBack }) => {
  const stats = [
    { value: '9', label: 'Expert Faculty', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { value: '55+', label: 'Publications', icon: BookOpen, color: 'from-purple-500 to-pink-500' },
    { value: '25', label: 'Patents', icon: Award, color: 'from-green-500 to-emerald-500' },
    { value: '82+', label: 'Years Combined Experience', icon: GraduationCap, color: 'from-orange-500 to-red-500' }
  ]

  const values = [
    {
      title: 'Excellence in Education',
      description: 'Committed to providing world-class technical education with industry-relevant curriculum and hands-on learning experiences.',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Research & Innovation',
      description: 'Fostering a culture of research with focus on emerging technologies like AI, Blockchain, IoT, and Cloud Computing.',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Industry Connect',
      description: 'Strong partnerships with industry leaders to ensure students are prepared for real-world challenges and opportunities.',
      icon: Building2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Global Perspective',
      description: 'Preparing students to be global citizens with international collaborations and exposure to cutting-edge technologies.',
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const achievements = [
    'Multiple SCIE and Scopus indexed research publications by faculty',
    '8+ patents filed and granted in cutting-edge technology areas',
    'Faculty with PhD degrees from premier institutes like NIT Patna',
    'Active research in AI, Machine Learning, Blockchain, and IoT',
    'Regular FDPs and workshops for continuous faculty development',
    'Strong industry collaborations and student project guidance'
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Prism Background */}
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

      {/* Content */}
      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl z-50"
        >
          <ArrowLeft className="w-4 h-4 text-gray-700" />
          <span className="text-sm font-medium text-gray-700">Back</span>
        </button>

        {/* Header */}
        <div className="max-w-6xl mx-auto mt-20 mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                <Building2 className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            About Our Department
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Department of Information Technology at JSS Academy of Technical Education is dedicated to excellence in education, research, and innovation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-6xl mx-auto mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Mission Statement */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              To provide quality technical education in Information Technology through innovative teaching methods, cutting-edge research, and industry collaboration. We aim to develop technically competent and ethically responsible professionals who can contribute to society and lead in the rapidly evolving technology landscape.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-8 h-8 text-yellow-600" />
              <h2 className="text-3xl font-bold text-gray-900">Key Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-800">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">Research Focus Areas</h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Artificial Intelligence',
                'Machine Learning',
                'Deep Learning',
                'Blockchain Technology',
                'Cloud & Fog Computing',
                'Internet of Things',
                'Wireless Sensor Networks',
                'Cybersecurity',
                'Computer Vision',
                'Network Security'
              ].map((area, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-6 opacity-90">
              Interested in learning more about our department? We'd love to hear from you.
            </p>
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="text-white/90">
                <strong>Location:</strong> JSS Academy of Technical Education, Noida
              </p>
              <p className="text-white/90">
                <strong>Department:</strong> Information Technology
              </p>
              <p className="text-white/90">
                <strong>Email:</strong> hodit@jssaten.ac.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
