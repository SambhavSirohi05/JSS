import React, { useState } from 'react'
import { Search, Mail, Phone, Award, BookOpen, GraduationCap, ChevronRight } from 'lucide-react'
import Prism from '../components/Prism'
import BackButton from '../components/BackButton'
import Card from '../components/Card'
import StatBox from '../components/StatBox'
import { facultyData, searchFaculty } from '../data/facultyData'
import { PRISM_CONFIG, COLORS } from '../constants/theme'

const Faculty = ({ onBack, onFacultyProfile }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDesignation, setSelectedDesignation] = useState('all')

  // Filter faculty based on search and designation
  const filteredFaculty = searchQuery
    ? searchFaculty(searchQuery)
    : selectedDesignation === 'all'
    ? facultyData
    : facultyData.filter(f => f.designation.toLowerCase() === selectedDesignation.toLowerCase())

  const FacultyCard = React.memo(({ faculty }) => (
    <Card className="p-6 overflow-hidden group">
      {/* Header with Image */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${COLORS.gradients.bluePurple} flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <GraduationCap className="w-10 h-10 text-white" />
        </div>

        {/* Name and Designation */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{faculty.name}</h3>
          <p className="text-sm text-blue-600 font-medium mb-1">{faculty.designation}</p>
          {faculty.additionalRole && (
            <p className="text-xs text-purple-600 font-medium">{faculty.additionalRole}</p>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span className="truncate">{faculty.email}</span>
        </div>
        {faculty.phone && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span>{faculty.phone}</span>
          </div>
        )}
      </div>

      {/* Experience Grid */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center border border-blue-200">
          <p className="text-xl font-bold text-blue-700">{faculty.experience.teaching}</p>
          <p className="text-xs text-gray-600 font-medium">Teaching</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 text-center border border-purple-200">
          <p className="text-xl font-bold text-purple-700">{faculty.experience.research || 0}</p>
          <p className="text-xs text-gray-600 font-medium">Research</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 text-center border border-green-200">
          <p className="text-xl font-bold text-green-700">{faculty.patents?.length || 0}</p>
          <p className="text-xs text-gray-600 font-medium">Patents</p>
        </div>
      </div>

      {/* Research Areas */}
      {faculty.researchAreas && faculty.researchAreas.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">Research Focus:</p>
          <div className="flex flex-wrap gap-1">
            {faculty.researchAreas.slice(0, 3).map((area, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full border border-blue-200 font-medium"
              >
                {area}
              </span>
            ))}
            {faculty.researchAreas.length > 3 && (
              <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full font-medium">
                +{faculty.researchAreas.length - 3}
              </span>
            )}
          </div>
        </div>
      )}

      {/* View Profile Button */}
      <button
        onClick={() => onFacultyProfile(faculty.id)}
        className={`w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${COLORS.gradients.blue} hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl transition-all duration-300 group-hover:shadow-lg font-medium`}
      >
        <span className="text-sm">View Full Profile</span>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </Card>
  ))

  FacultyCard.displayName = 'FacultyCard'

  // Calculate stats
  const stats = [
    {
      icon: GraduationCap,
      value: facultyData.length.toString(),
      label: 'Faculty Members',
      color: COLORS.iconColors.blue
    },
    {
      icon: BookOpen,
      value: `${facultyData.reduce((sum, f) => {
        const pubs = f.publications
        return sum + (pubs.scie || pubs.webOfScience || 0) + (pubs.scopus || 0) + (pubs.otherJournals || 0) + (pubs.conferences || 0)
      }, 0)}+`,
      label: 'Publications',
      color: COLORS.iconColors.purple
    },
    {
      icon: Award,
      value: `${facultyData.reduce((sum, f) => sum + (f.patents?.length || 0), 0)}`,
      label: 'Patents',
      color: COLORS.iconColors.green
    },
    {
      icon: GraduationCap,
      value: `${facultyData.reduce((sum, f) => sum + (f.experience.teaching || 0), 0)}+`,
      label: 'Years Experience',
      color: COLORS.iconColors.orange
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Prism Background */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Prism {...PRISM_CONFIG} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen px-4 py-8">
        {/* Back Button */}
        <BackButton onBack={onBack} />

        {/* Header */}
        <div className="max-w-6xl mx-auto mt-20 mb-10 text-center">
          <div className="inline-block mb-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${COLORS.gradients.bluePurple} shadow-xl flex items-center justify-center`}>
              <GraduationCap className="w-9 h-9 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Our Faculty
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Meet our distinguished faculty members from the Department of Information Technology
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-6xl mx-auto mb-10">
          <Card className="p-6">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, designation, or research area..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-gray-800 font-medium"
              />
            </div>

            {/* Designation Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { value: 'all', label: 'All Faculty' },
                { value: 'professor', label: 'Professors' },
                { value: 'associate professor', label: 'Associate Professors' },
                { value: 'assistant professor', label: 'Assistant Professors' }
              ].map((designation) => (
                <button
                  key={designation.value}
                  onClick={() => {
                    setSelectedDesignation(designation.value)
                    setSearchQuery('')
                  }}
                  className={`px-6 py-2.5 rounded-xl border-2 font-semibold transition-all duration-300 ${
                    selectedDesignation === designation.value
                      ? `bg-gradient-to-r ${COLORS.gradients.blue} text-white border-transparent shadow-lg scale-105`
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:shadow-md'
                  }`}
                >
                  {designation.label}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Department Stats */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

        {/* Faculty Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          {filteredFaculty.length > 0 ? (
            <>
              <div className="mb-6 text-center">
                <p className="text-gray-600 font-medium">
                  Showing <span className="font-bold text-blue-600">{filteredFaculty.length}</span> faculty member{filteredFaculty.length !== 1 ? 's' : ''}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFaculty.map((faculty) => (
                  <FacultyCard key={faculty.id} faculty={faculty} />
                ))}
              </div>
            </>
          ) : (
            <Card className="p-12 text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Faculty Found</h3>
              <p className="text-gray-600">No faculty members match your search criteria. Try adjusting your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedDesignation('all')
                }}
                className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors duration-300"
              >
                Clear Filters
              </button>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default Faculty
