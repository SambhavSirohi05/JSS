import React from 'react'
import { ArrowLeft, Mail, Phone, MapPin, Building2, GraduationCap, Globe, Clock } from 'lucide-react'
import Prism from '../components/Prism'

const Contact = ({ onBack }) => {
  const contactInfo = [
    {
      icon: Building2,
      title: 'Department',
      details: ['Department of Information Technology', 'JSS Academy of Technical Education'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Sector 62, Noida', 'Uttar Pradesh, India'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hodit@jssaten.ac.in', 'For general inquiries'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-7078221008', 'HOD Office'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ]

  const quickLinks = [
    {
      title: 'Visit Our Website',
      url: 'https://jssaten.ac.in',
      icon: Globe,
      description: 'Learn more about JSS Academy'
    },
    {
      title: 'Faculty Directory',
      description: 'Browse our expert faculty members',
      icon: GraduationCap
    }
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
                <Mail className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our department, programs, or faculty? We're here to help.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="max-w-6xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <div key={index} className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-md`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className={`text-gray-700 ${idx === 0 ? 'font-medium' : 'text-sm'}`}>
                    {detail}
                  </p>
                ))}
              </div>
            )
          })}
        </div>

        {/* Office Hours */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Office Hours</h2>
            </div>
            <div className="max-w-md mx-auto space-y-4">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <span className="font-semibold text-gray-900">{schedule.day}</span>
                  <span className="text-gray-700">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon
              return (
                <div key={index} className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h3>
                      <p className="text-gray-700 text-sm">{link.description}</p>
                      {link.url && (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          Visit Website →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                Find Us
              </h2>
            </div>
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2 font-medium">JSS Academy of Technical Education</p>
                <p className="text-gray-500 text-sm">Sector 62, Noida, Uttar Pradesh</p>
                <a
                  href="https://maps.google.com/?q=JSS+Academy+of+Technical+Education+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Contact Info */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Contact Our Faculty</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Each faculty member can be reached directly via their email addresses listed in their profiles.
            </p>
            <p className="text-white/90 mb-2">
              <strong>Head of Department:</strong> Dr. Lavkush Sharma
            </p>
            <p className="text-white/90">
              <strong>Email:</strong> hodit@jssaten.ac.in
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
