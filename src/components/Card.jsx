import React from 'react'

const Card = React.memo(({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg ${
        hover ? 'hover:shadow-xl transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
})

Card.displayName = 'Card'

export default Card
