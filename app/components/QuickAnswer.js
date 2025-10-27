import React from 'react'

const QuickAnswer = ({ children }) => {
  return (
    <div className="quick-answer-section mb-8" style={{backgroundColor: '#F8F5EE', padding: '1.5rem', borderLeft: '4px solid #C8A27C'}}>
      <div className="quick-answer-content">
        {children}
      </div>
    </div>
  )
}

export default QuickAnswer
