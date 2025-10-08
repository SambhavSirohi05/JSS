import React from 'react'
import { ArrowLeft, Trophy, Award, Star, Target, Calendar, Shield, Zap } from 'lucide-react'
import Prism from '../components/Prism'

const Retr0Achievements = ({ onBack }) => {
  const achievements = [
    {
      id: 1,
      title: "AI Portfolio Project",
      organization: "Personal Development",
      date: "2024",
      description: "Successfully built and deployed AI-powered interactive portfolio with autonomous client interaction using Groq API and real-time processing.",
      category: "Project",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "AuthentiFi Platform",
      organization: "Blockchain Innovation",
      date: "2024",
      description: "Developed blockchain-based credential verification platform using soulbound NFTs to prevent credential fraud and enable instant verification.",
      category: "Project",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      title: "Chainlings Arena",
      organization: "Gaming Development",
      date: "2024",
      description: "Created real-time multiplayer crypto trading game with live price feeds, automated scoring, and competitive leaderboards.",
      category: "Project",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Technical Society Member",
      organization: "Quanta - Electronics and Communication Society",
      date: "2023 - Present",
      description: "Active member and mentor in technical society, organizing events and conducting workshops on Arduino Programming and electronics.",
      category: "Leadership",
      icon: Star,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 5,
      title: "Full-Stack Developer",
      organization: "Self-Taught",
      date: "2023 - Present",
      description: "Mastered full-stack development with expertise in React.js, Node.js, MongoDB, and modern web technologies.",
      category: "Skills",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    }
  ]

  const categories = ["All", "Project", "Leadership", "Skills", "Innovation", "Development"]

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
          className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-20 pb-8 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cyber Achievements
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of cybersecurity milestones, certifications, and recognitions that define my journey in the digital security realm.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="flex-1 px-6 pb-8">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Achievements List */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon
                return (
                  <div
                    key={achievement.id}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>

                    {/* Title and Organization */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 mb-3 font-medium">
                      {achievement.organization}
                    </p>

                    {/* Date */}
                    <p className="text-sm text-gray-400 mb-4">
                      {achievement.date}
                    </p>

                    {/* Description */}
                    <p className="text-gray-200 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Secure Your Digital Assets?
                </h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how my cybersecurity expertise can protect and enhance your organization's security posture.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg">
                  Contact Security Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Retr0Achievements

