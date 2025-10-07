import React, { useState, useEffect, useRef } from 'react'
import { Send, User, Code, Cpu, Briefcase, Mail, FileText, ArrowLeft, Bot, Loader2 } from 'lucide-react'
import Prism from '../components/Prism'
import { sendMessageToAI } from '../services/aiService'

const Retr0 = ({ onBack }) => {
  const [greeting, setGreeting] = useState('')
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
    { icon: User, label: 'About', color: 'from-purple-500 to-pink-500' },
    { icon: Code, label: 'Projects', color: 'from-blue-500 to-cyan-500' },
    { icon: Cpu, label: 'Skills', color: 'from-green-500 to-emerald-500' },
    { icon: Briefcase, label: 'Experience', color: 'from-orange-500 to-red-500' },
    { icon: Mail, label: 'Contact', color: 'from-yellow-500 to-orange-500' }
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
      
      {/* Floating CV Button */}
      <div className="fixed top-6 right-6 z-10">
        <button className="group flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-gray-700 shadow-lg hover:bg-gray-900 transition-all duration-300 hover:shadow-xl">
          <FileText className="w-4 h-4 text-gray-300 group-hover:text-white" />
          <span className="text-sm font-medium text-gray-300 group-hover:text-white">CV</span>
        </button>
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 pointer-events-none">
        {/* Hero Section */}
        <div className="text-center mb-8">
          {/* Time-based Greeting */}
          <p className="text-lg text-gray-300 mb-3 font-light">
            {greeting}, I'm <span className="font-medium text-white">Retr0</span>
          </p>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-space-grotesk">
            Retr0 Portfolio
          </h1>
          
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center">
                <Code className="w-12 h-12 text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Chat Container */}
        <div className="w-full max-w-2xl mb-8 pointer-events-auto">
          {!showChat ? (
            /* Initial Input Only */
            <form onSubmit={handleChatSubmit} className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything…"
                  disabled={isLoading}
                  className="w-full px-6 py-4 pr-16 bg-black/80 backdrop-blur-md rounded-full border border-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white text-lg disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !chatInput.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 text-gray-300 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 text-gray-300" />
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Chat Interface with Messages */
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg h-80 flex flex-col">
              {/* Chat Messages Area */}
              <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-800 text-gray-200'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t border-gray-700">
                <form onSubmit={handleChatSubmit} className="relative">
                  <div className="relative">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask me anything…"
                      disabled={isLoading}
                      className="w-full px-6 py-4 pr-16 bg-black/80 backdrop-blur-md rounded-full border border-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white text-lg disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !chatInput.trim()}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 text-gray-300 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 text-gray-300" />
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl pointer-events-auto">
          {categoryButtons.map((button, index) => {
            const IconComponent = button.icon
            return (
              <button
                key={index}
                className="group flex flex-col items-center gap-2 px-6 py-4 bg-black/80 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg hover:bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[120px]"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${button.color} shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                  {button.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Retr0
