import React, { useState, useEffect, useRef } from 'react'
import { Send, User, Code, Cpu, Briefcase, Mail, FileText, Bot, Loader2 } from 'lucide-react'
import Prism from '../components/Prism'
import { sendMessageToAI } from '../services/aiService'

const Home = ({ onRetr0, onMe }) => {
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
    { icon: User, label: 'About', color: 'from-pink-400 to-rose-400', onClick: onMe },
    { icon: Code, label: 'Projects', color: 'from-blue-400 to-cyan-400' },
    { icon: Cpu, label: 'Skills', color: 'from-green-400 to-emerald-400' },
    { icon: Briefcase, label: 'Experience', color: 'from-purple-400 to-violet-400' },
    { icon: Mail, label: 'Contact', color: 'from-orange-400 to-amber-400' }
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
      
      {/* Floating CV Button */}
      <div className="fixed top-6 right-6 z-10">
        <button className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl">
          <FileText className="w-4 h-4 text-gray-700 group-hover:text-gray-900" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">CV</span>
        </button>
      </div>

      {/* Floating Retr0 Button */}
      <div className="fixed top-6 left-6 z-10">
        <button 
          onClick={onRetr0}
          className="group flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl"
        >
          <Code className="w-4 h-4 text-gray-700 group-hover:text-gray-900" />
          <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Retr0</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 pointer-events-none">
        {/* Hero Section */}
        <div className="text-center mb-8">
          {/* Time-based Greeting */}
          <p className="text-lg text-gray-700 mb-3 font-light">
            {greeting}, I'm <span className="font-medium text-gray-900">Sambhav Sirohi</span>
          </p>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-space-grotesk">
            Portfolio
          </h1>
          
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 shadow-2xl flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                <User className="w-12 h-12 text-gray-700" />
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
                  className="w-full px-6 py-4 pr-16 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder-gray-500 text-gray-800 text-lg disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !chatInput.trim()}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 text-gray-700 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>
            </form>
          ) : (
            /* Chat Interface with Messages */
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg h-80 flex flex-col">
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
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-sm">AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200">
                <form onSubmit={handleChatSubmit} className="relative">
                  <div className="relative">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask me anything…"
                      disabled={isLoading}
                      className="w-full px-6 py-4 pr-16 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent placeholder-gray-500 text-gray-800 text-lg disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !chatInput.trim()}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                    >
                      {isLoading ? (
                        <Loader2 className="w-5 h-5 text-gray-700 animate-spin" />
                      ) : (
                        <Send className="w-5 h-5 text-gray-700" />
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
                onClick={button.onClick}
                className="group flex flex-col items-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-w-[120px]"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-br ${button.color} shadow-md group-hover:shadow-lg transition-all duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
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

export default Home
