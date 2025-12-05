import React, { useRef, useEffect } from 'react'

const ValueDisplay = ({ value }) => {
  const prevRef = useRef('')
  useEffect(() => {
    prevRef.current = value
  }, [value])

  return (
    <div className='display-box'>
      <h3>Current Value: {value}</h3>
      <h3>Previous Value: {prevRef.current}</h3>
    </div>
  )
}

export default ValueDisplay
