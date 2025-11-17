import React, { useState } from 'react'
import { ArrowLeft, Mail, Phone, Award, BookOpen, GraduationCap, FileText, Users, Calendar, ExternalLink } from 'lucide-react'
import Prism from '../components/Prism'
import { getFacultyById } from '../data/facultyData'

const FacultyProfile = ({ onBack, facultyId }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const faculty = getFacultyById(facultyId)

  if (!faculty) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Faculty member not found.</p>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'patents', label: 'Patents & Awards', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap }
  ]

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <a href={`mailto:${faculty.email}`} className="text-sm text-blue-600 hover:underline">
                {faculty.email}
              </a>
            </div>
          </div>
          {faculty.phone && (
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm text-gray-800">{faculty.phone}</p>
              </div>
            </div>
          )}
          {faculty.joiningDate && (
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-xs text-gray-500">Date of Joining</p>
                <p className="text-sm text-gray-800">{faculty.joiningDate}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Experience */}
      <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Experience</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-3xl font-bold text-blue-600">{faculty.experience.teaching}</p>
            <p className="text-sm text-gray-600 mt-1">Years Teaching</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-3xl font-bold text-purple-600">{faculty.experience.research || 0}</p>
            <p className="text-sm text-gray-600 mt-1">Years Research</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-3xl font-bold text-green-600">{faculty.experience.industry || 0}</p>
            <p className="text-sm text-gray-600 mt-1">Years Industry</p>
          </div>
        </div>
      </div>

      {/* Research Areas */}
      {faculty.researchAreas && faculty.researchAreas.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Research Areas</h3>
          <div className="flex flex-wrap gap-2">
            {faculty.researchAreas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-md"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects Guided */}
      {faculty.projectsGuided && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Projects Guided</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">{faculty.projectsGuided.phd || 0}</p>
              <p className="text-xs text-gray-600 mt-1">PhD Level</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">{faculty.projectsGuided.masters || 0}</p>
              <p className="text-xs text-gray-600 mt-1">Master's Level</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <p className="text-2xl font-bold text-gray-900">{faculty.projectsGuided.bachelors || 0}</p>
              <p className="text-xs text-gray-600 mt-1">Bachelor's Level</p>
            </div>
          </div>
        </div>
      )}

      {/* Memberships */}
      {faculty.memberships && faculty.memberships.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Professional Memberships</h3>
          <ul className="space-y-2">
            {faculty.memberships.map((membership, index) => (
              <li key={index} className="flex items-start gap-2">
                <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-800">{membership}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  const renderPublications = () => (
    <div className="space-y-6">
      {/* Publication Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {faculty.publications.scie && (
          <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">{faculty.publications.scie}</p>
            <p className="text-sm text-gray-600 mt-1">SCIE Papers</p>
          </div>
        )}
        {faculty.publications.scopus && (
          <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-4 text-center">
            <p className="text-3xl font-bold text-purple-600">{faculty.publications.scopus}</p>
            <p className="text-sm text-gray-600 mt-1">Scopus Papers</p>
          </div>
        )}
        {faculty.publications.conferences && (
          <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-4 text-center">
            <p className="text-3xl font-bold text-green-600">{faculty.publications.conferences}</p>
            <p className="text-sm text-gray-600 mt-1">Conferences</p>
          </div>
        )}
        {faculty.publications.bookChapters && (
          <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-4 text-center">
            <p className="text-3xl font-bold text-orange-600">{faculty.publications.bookChapters}</p>
            <p className="text-sm text-gray-600 mt-1">Book Chapters</p>
          </div>
        )}
      </div>

      {/* Notable Publications */}
      {faculty.notablePublications && faculty.notablePublications.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Notable Publications</h3>
          <div className="space-y-4">
            {faculty.notablePublications.map((pub, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-900 mb-1">{pub.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{pub.journal} • {pub.year}</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">{pub.type}</span>
                  {pub.impactFactor && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                      IF: {pub.impactFactor}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Book Chapters */}
      {faculty.bookChapters && faculty.bookChapters.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Book Chapters</h3>
          <div className="space-y-4">
            {faculty.bookChapters.map((chapter, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-semibold text-gray-900 mb-1">{chapter.title}</h4>
                <p className="text-sm text-gray-600">
                  {chapter.book} • {chapter.publisher} • {chapter.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const renderPatentsAndAwards = () => (
    <div className="space-y-6">
      {/* Patents */}
      {faculty.patents && faculty.patents.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Patents</h3>
          <div className="space-y-4">
            {faculty.patents.map((patent, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 flex-1">{patent.title}</h4>
                  <span className={`px-2 py-1 text-xs rounded ${
                    patent.status === 'Granted'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {patent.status}
                  </span>
                </div>
                {patent.applicationNo && (
                  <p className="text-sm text-gray-600">Application No: {patent.applicationNo}</p>
                )}
                {patent.country && (
                  <p className="text-sm text-gray-600">Country: {patent.country}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {faculty.awards && faculty.awards.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Awards & Recognition</h3>
          <ul className="space-y-3">
            {faculty.awards.map((award, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <Award className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-800">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Certifications */}
      {faculty.certifications && faculty.certifications.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Certifications</h3>
          <div className="space-y-2">
            {faculty.certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-2 p-3 border border-gray-200 rounded-lg">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const renderEducation = () => (
    <div className="space-y-6">
      {faculty.qualifications && faculty.qualifications.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Educational Qualifications</h3>
          <div className="space-y-4">
            {faculty.qualifications.map((qual, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 py-3 relative">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white"></div>

                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900">{qual.degree}</h4>
                    <p className="text-sm text-gray-700 mt-1">{qual.specialization}</p>
                    <p className="text-sm text-gray-600 mt-1">{qual.institution}</p>
                  </div>
                  <div className="text-right">
                    {qual.year && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        {qual.year}
                      </span>
                    )}
                    {qual.status && (
                      <span className="block mt-2 text-xs text-gray-500">{qual.status}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Workshops */}
      {faculty.workshops && faculty.workshops.length > 0 && (
        <div className="bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Workshops & FDPs Attended</h3>
          <div className="space-y-3">
            {faculty.workshops.map((workshop, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{workshop.name}</h4>
                <p className="text-sm text-gray-600">{workshop.organizer}</p>
                <p className="text-xs text-gray-500 mt-1">{workshop.date}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

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

        {/* Faculty Header */}
        <div className="max-w-6xl mx-auto mt-20 mb-8">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-8">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-xl">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{faculty.name}</h1>
                <p className="text-xl text-blue-600 font-semibold mb-2">{faculty.designation}</p>
                <p className="text-gray-600 mb-4">{faculty.department}</p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {faculty.experience.teaching} Years Teaching
                    </span>
                  </div>
                  {faculty.patents && faculty.patents.length > 0 && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {faculty.patents.length} Patents
                      </span>
                    </div>
                  )}
                  {faculty.publications && (
                    <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                      <BookOpen className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {(faculty.publications.scie || 0) + (faculty.publications.scopus || 0)}+ Publications
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg p-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto mb-12">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'publications' && renderPublications()}
          {activeTab === 'patents' && renderPatentsAndAwards()}
          {activeTab === 'education' && renderEducation()}
        </div>
      </div>
    </div>
  )
}

export default FacultyProfile
