import React, { useState } from 'react'
import { ArrowLeft, Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Clock, CheckCircle, Shield, Zap } from 'lucide-react'
import Prism from '../components/Prism'

const Retr0Contact = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'retr0@example.com',
      link: 'mailto:retr0@example.com',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Signal',
      value: '+1 (555) 987-6543',
      link: 'tel:+15559876543',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Digital Space',
      link: '#',
      color: 'from-pink-400 to-pink-600'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/retr0',
      color: 'hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/retr0',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/retr0',
      color: 'hover:text-blue-300'
    }
  ]

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM PST' },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM PST' },
    { day: 'Sunday', time: 'Emergency Only' }
  ]

  const securityFeatures = [
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description: 'All communications are encrypted using military-grade encryption'
    },
    {
      icon: Zap,
      title: 'Secure Messaging',
      description: 'Messages are automatically deleted after 24 hours'
    },
    {
      icon: CheckCircle,
      title: 'Verified Identity',
      description: 'All communications are verified and authenticated'
    }
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
              Contact
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate on cutting-edge projects? Let's connect securely and build the future together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pointer-events-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} shadow-md group-hover:shadow-lg transition-all duration-300`}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{info.title}</h3>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 ${social.color} group`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-purple-400" />
                  Security Features
                </h2>
                <div className="space-y-4">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <feature.icon className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{feature.title}</h3>
                        <p className="text-gray-400 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-green-400" />
                  Availability
                </h2>
                <div className="space-y-3">
                  {availability.map((slot, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                      <span className="font-medium text-white">{slot.day}</span>
                      <span className="text-gray-400">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-gray-700 shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-purple-400" />
                Send Secure Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Securely!</h3>
                  <p className="text-gray-300">Your encrypted message has been delivered. I'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 disabled:bg-purple-300 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Encrypting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Secure Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 pointer-events-auto">
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Build the Future?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on cutting-edge projects and collaborate with innovative teams. 
                Whether you have a cybersecurity challenge, want to explore AI technology, or need help with 
                advanced web development, let's create something extraordinary together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:retr0@example.com"
                  className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  Send Encrypted Email
                </a>
                <a
                  href="https://github.com/retr0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Retr0Contact
