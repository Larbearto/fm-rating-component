import React from 'react'
import { useState } from 'react'

function Button() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className='text-white text-md font-bold font-overpass'>
      <button
        onClick={handleClick}
        className={`rounded-3xl uppercase py-3 w-full tracking-widest hover: ${
          isActive === true ? 'bg-white text-primary' : 'bg-primary text-white'
        }`}
      >
        submit
      </button>
    </div>
  )
}
export default Button
