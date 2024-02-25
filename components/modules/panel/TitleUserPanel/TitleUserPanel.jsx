import React from 'react'

const TitleUserPanel = ({title}) => {
  return (
    <div className="flex items-center">
    <span className="flex-1 h-px bg-gray-700"></span>
    <h2 className="text-gray-100 mx-3">{title}</h2>
    <span className="flex-1 h-px bg-gray-700"></span>
  </div>
  )
}

export default TitleUserPanel