import React from 'react'
import { ArrowLeft, Trophy, Award, Star, Target, Calendar } from 'lucide-react'
import Prism from '../components/Prism'

const Achievements = ({ onBack }) => {
  const achievements = [
    {
      id: 1,
      title: "First Place - Hackathon 2024",
      organization: "Tech Innovation Summit",
      date: "March 2024",
      description: "Led a team of 4 developers to create an AI-powered productivity app that won first place among 50+ competing teams.",
      category: "Competition",
      icon: Trophy,
      color: "from-yellow-400 to-orange-400"
    },
    {
      id: 2,
      title: "Outstanding Student Award",
      organization: "Computer Science Department",
      date: "December 2023",
      description: "Recognized for exceptional academic performance and contributions to the computer science community.",
      category: "Academic",
      icon: Award,
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      organization: "React Community",
      date: "Ongoing",
      description: "Contributed to major open source projects with 500+ commits and helped maintain popular React libraries.",
      category: "Open Source",
      icon: Star,
      color: "from-green-400 to-emerald-400"
    },
    {
      id: 4,
      title: "Certified AWS Solutions Architect",
      organization: "Amazon Web Services",
      date: "August 2023",
      description: "Successfully passed the AWS Solutions Architect Associate exam with a score of 95%.",
      category: "Certification",
      icon: Target,
      color: "from-purple-400 to-pink-400"
    },
    {
      id: 5,
      title: "Best Project Award",
      organization: "University Capstone",
      date: "May 2023",
      description: "Developed a machine learning model for predicting student success with 92% accuracy.",
      category: "Project",
      icon: Calendar,
      color: "from-red-400 to-rose-400"
    }
  ]

  const categories = ["All", "Competition", "Academic", "Open Source", "Certification", "Project"]

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
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
          className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-gray-700 hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-20 pb-8 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Achievements
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of milestones, awards, and recognitions that mark my journey in technology and innovation.
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
                  className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-gray-700 hover:bg-white/30 transition-all duration-300 border border-white/20"
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
                    className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/30 transition-all duration-300 group"
                  >
                    {/* Icon and Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-gray-600 bg-white/20 px-3 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>

                    {/* Title and Organization */}
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 mb-3 font-medium">
                      {achievement.organization}
                    </p>

                    {/* Date */}
                    <p className="text-sm text-gray-500 mb-4">
                      {achievement.date}
                    </p>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Interested in Working Together?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how my achievements and experience can contribute to your next project.
                </p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements

