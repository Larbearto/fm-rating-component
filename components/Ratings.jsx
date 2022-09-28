import { useState } from 'react'

function Ratings() {
  const [isActive, setIsActive] = useState(null)

  const handleClick = (e) => {
    e.target.value()
  }

  const nums = [1, 2, 3, 4, 5]
  return (
    <div>
      <ul className='flex items-center justify-center'>
        <li
          onClick={handleClick}
          className={`${
            isActive === true
              ? 'bg-mediumgrey text-white'
              : 'bg-darkblue text-white'
          }`}
        >
          1
        </li>
        <li
          onClick={handleClick}
          className={`${
            isActive === true ? 'bg-mediumgrey text-white' : ' text-white'
          }`}
        >
          2
        </li>
        <li
          onClick={handleClick}
          className={`${
            isActive === true
              ? 'bg-mediumgrey text-white'
              : 'bg-darkblue text-white'
          }`}
        >
          3
        </li>
        <li
          onClick={handleClick}
          className={`${
            isActive === true
              ? 'bg-mediumgrey text-white'
              : 'bg-darkblue text-white'
          }`}
        >
          4
        </li>
        <li
          onClick={handleClick}
          className={`${
            isActive === true
              ? 'bg-mediumgrey text-white'
              : 'bg-darkblue text-white'
          }`}
        >
          5
        </li>
      </ul>
    </div>
  )
}

export default Ratings
