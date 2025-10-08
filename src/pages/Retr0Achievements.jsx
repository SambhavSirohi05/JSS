import React from 'react'
import { ArrowLeft, Trophy, Award, Star, Target, Calendar, Shield, Zap } from 'lucide-react'
import Prism from '../components/Prism'

const Retr0Achievements = ({ onBack }) => {
  const achievements = [
    {
      id: 1,
      title: "Elite Hacker - CTF Champion",
      organization: "CyberDefense Challenge 2024",
      date: "March 2024",
      description: "Secured first place in a 48-hour Capture The Flag competition, solving 15/20 challenges including advanced cryptography and reverse engineering.",
      category: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Zero-Day Discovery",
      organization: "Bug Bounty Program",
      date: "January 2024",
      description: "Discovered and responsibly disclosed a critical zero-day vulnerability in a major web application, earning recognition from the security community.",
      category: "Research",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      title: "Penetration Testing Expert",
      organization: "Offensive Security",
      date: "November 2023",
      description: "Achieved OSCP certification with perfect score, demonstrating advanced penetration testing and ethical hacking skills.",
      category: "Certification",
      icon: Award,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Security Researcher of the Year",
      organization: "InfoSec Institute",
      date: "September 2023",
      description: "Published 12 security research papers and contributed to multiple open-source security tools with 1000+ GitHub stars.",
      category: "Research",
      icon: Star,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 5,
      title: "Red Team Lead",
      organization: "Corporate Security Division",
      date: "Ongoing",
      description: "Leading red team operations for Fortune 500 companies, successfully identifying and mitigating critical security vulnerabilities.",
      category: "Professional",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Malware Analysis Master",
      organization: "SANS Institute",
      date: "July 2023",
      description: "Completed advanced malware analysis course with distinction, specializing in APT detection and reverse engineering.",
      category: "Training",
      icon: Trophy,
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const categories = ["All", "Cybersecurity", "Research", "Certification", "Professional", "Training"]

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

