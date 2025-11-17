import React from 'react'
import { ArrowLeft } from 'lucide-react'

const BackButton = React.memo(({ onBack, label = 'Back' }) => {
  return (
    <button
      onClick={onBack}
      className="fixed top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl z-50"
    >
      <ArrowLeft className="w-4 h-4 text-gray-700" />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </button>
  )
})

BackButton.displayName = 'BackButton'

export default BackButton
