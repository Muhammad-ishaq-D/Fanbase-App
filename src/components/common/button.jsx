import React from 'react'

export default function Button({className = '', type = 'button', size = 'medium'}) {

  const sizeClasses = {
    small: 'py-[0.4rem] px-4 ',
    medium: 'py-2 px-24 ',
    large: 'py-3 px-36 ',
  };

  return (
    <div>
        <button className={`${className} ${sizeClasses[size]} rounded-[1.875rem] font-bold text-white`} 
    style={{
    backgroundImage: 'linear-gradient(90deg, #ff00d6, #f09d45)',
  }}>{type}</button>
    </div>
  )
}
