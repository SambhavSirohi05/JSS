import React from 'react'

const StatBox = React.memo(({ icon: Icon, value, label, color = 'text-blue-600' }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg p-4 text-center hover:shadow-xl transition-all duration-300">
      <Icon className={`w-8 h-8 ${color} mx-auto mb-2`} />
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  )
})

StatBox.displayName = 'StatBox'

export default StatBox
