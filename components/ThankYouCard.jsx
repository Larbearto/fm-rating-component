import Image from 'next/image'
import React from 'react'
import Illustration from '../public/illustration-thank-you.svg'

function ThankYouCard({ value }) {
  return (
    <div className='card-container thankyou'>
      <Illustration />
      <p className='results'>You selected {value} out of 5</p>
      <h2 className='card-header'>Thank you!</h2>
      <p className='card-text'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  )
}

export default ThankYouCard
