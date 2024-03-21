import React from 'react'

const TitleUserPanel = ({title}) => {
  return (
    <div className="flex items-center">
    <span className="flex-1 h-px dark:bg-gray-700 bg-gray-100"></span>
    <h2 className="dark:text-gray-100 mx-3 text-gray-800">{title}</h2>
    <span className="flex-1 h-px dark:bg-gray-700 bg-gray-100"></span>
  </div>
  )
}

export default TitleUserPanel