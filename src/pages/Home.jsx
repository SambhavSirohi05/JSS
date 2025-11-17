import React, { useState, useEffect, useRef } from 'react'
import { Send, Users, BookOpen, Award, Mail, Bot, Loader2, GraduationCap, Building2, Sparkles } from 'lucide-react'
import Prism from '../components/Prism'
import StatBox from '../components/StatBox'
import { sendMessageToAI } from '../services/aiService'
import { parseLinksToJSX } from '../utils/linkParser.jsx'
import { PRISM_CONFIG, COLORS } from '../constants/theme'

const Home = ({ onFaculty, onAbout, onDepartments, onContact }) => {
  const [chatInput, setChatInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [showChat, setShowChat] = useState(false)
  const chatContainerRef = useRef(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const handleChatSubmit = async (e) => {
    e.preventDefault()
    if (!chatInput.trim() || isLoading) return

    const userMessage = chatInput.trim()
    setChatInput('')
    setIsLoading(true)
    setShowChat(true)

    // Add user message
    const newMessages = [...messages, { type: 'user', content: userMessage }]
    setMessages(newMessages)

    try {
      const aiResponse = await sendMessageToAI(userMessage)
      setMessages([...newMessages, { type: 'ai', content: aiResponse }])
    } catch (error) {
      setMessages([...newMessages, { type: 'ai', content: 'Sorry, I encountered an error. Please try again.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const categoryButtons = [
    { icon: Users, label: 'Faculty', color: COLORS.gradients.blue, onClick: onFaculty, description: 'Meet our expert faculty' },
    { icon: BookOpen, label: 'About', color: COLORS.gradients.purple, onClick: onAbout, description: 'Learn about our department' },
    { icon: Building2, label: 'Departments', color: COLORS.gradients.green, onClick: onDepartments, description: 'Explore our programs' },
    { icon: Mail, label: 'Contact', color: COLORS.gradients.orange, onClick: onContact, description: 'Get in touch with us' }
  ]

  const stats = [
    { icon: Users, value: '9', label: 'Faculty Members', color: COLORS.iconColors.blue },
    { icon: BookOpen, value: '55+', label: 'Publications', color: COLORS.iconColors.purple },
    { icon: Award, value: '25', label: 'Patents', color: COLORS.iconColors.green },
    { icon: GraduationCap, value: '180+', label: 'Projects Guided', color: COLORS.iconColors.orange }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Prism Background Animation */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Prism {...PRISM_CONFIG} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 pointer-events-none">
        {/* Hero Section */}
        <div className="text-center mb-10 animate-fade-in">
          {/* College Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center">
                <GraduationCap className="w-14 h-14 text-blue-600" />
              </div>
            </div>
          </div>

          {/* College Name with modern typography */}
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-3 tracking-tight">
            JSS Academy
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            of Technical Education
          </h2>

          {/* Department Badge with enhanced design */}
          <div className="inline-flex items-center gap-2 mt-5 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <Building2 className="w-5 h-5 text-blue-600" />
            <p className="text-sm font-semibold text-gray-800">
              Department of Information Technology
            </p>
          </div>

          {/* Enhanced Tagline */}
          <p className="text-lg md:text-xl text-gray-700 mt-8 max-w-2xl mx-auto font-medium">
            Excellence in Technical Education <span className="text-blue-600">•</span> Research <span className="text-purple-600">•</span> Innovation
          </p>
        </div>

        {/* AI Assistant Section with enhanced design */}
        <div className="w-full max-w-2xl mb-10 pointer-events-auto">
          <div className="text-center mb-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-medium shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>AI Assistant</span>
            </div>
          </div>

          {!showChat ? (
            /* Initial Input with enhanced styling */
            <form onSubmit={handleChatSubmit} className="relative">
              <div className="relative group">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about our faculty, programs, research, or anything else..."
                  disabled={isLoading}
                  className="w-full px-6 py-5 pr-16 bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-gray-200 shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-gray-800 text-base disabled:opacity-50 group-hover:border-blue-300 transition-all duration-300"
                />
                <button
                  type="submit"
                  disabled={isLoading || !chatInput.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Chat Interface with enhanced design */
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl border-2 border-gray-200 shadow-2xl h-96 flex flex-col overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">AI Assistant</span>
                </div>
                <button
                  onClick={() => {
                    setShowChat(false)
                    setMessages([])
                  }}
                  className="text-white/80 hover:text-white text-sm"
                >
                  Clear
                </button>
              </div>

              {/* Chat Messages Area */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'ai' && (
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl shadow-md ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      }`}
                    >
                      <div className="text-sm whitespace-pre-line leading-relaxed">
                        {message.type === 'ai' ? parseLinksToJSX(message.content) : message.content}
                      </div>
                    </div>
                    {message.type === 'user' && (
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-md border border-gray-200">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                        <span className="text-sm">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <form onSubmit={handleChatSubmit} className="relative">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="w-full px-5 py-3 pr-14 bg-gray-50 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-gray-800 text-sm disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !chatInput.trim()}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Cards with modern design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full pointer-events-auto mb-12">
          {categoryButtons.map((button, index) => {
            const IconComponent = button.icon
            return (
              <button
                key={index}
                onClick={button.onClick}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 text-center"
              >
                <div className={`mx-auto w-14 h-14 rounded-xl bg-gradient-to-br ${button.color} shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center mb-3`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {button.label}
                </h3>
                <p className="text-xs text-gray-600">{button.description}</p>
              </button>
            )
          })}
        </div>

        {/* Stats Grid with enhanced styling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full pointer-events-auto">
          {stats.map((stat, index) => (
            <StatBox
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
