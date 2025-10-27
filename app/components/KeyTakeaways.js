import React from 'react'

const KeyTakeaways = ({ children }) => {
  return (
    <div className="key-takeaways-section mb-8" style={{backgroundColor: '#ECF4F4', padding: '1.5rem', borderLeft: '4px solid #9CA3AF'}}>
      {/* Title inside the white box */}
      <h2 className="text-xl font-bold text-left mb-4" style={{color: '#0d9488'}}>
        Key Takeaways
      </h2>
      
      {/* Content area */}
      <div className="key-takeaways-content">
        {children}
      </div>
    </div>
  )
}

export default KeyTakeaways
