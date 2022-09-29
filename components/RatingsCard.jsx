import { useState } from 'react'
import Star from '../public/icon-star.svg'
import ThankYouCard from '../components/ThankYouCard'

function RatingsCard() {
  const [rating, setRating] = useState(0)
  const [submit, setSubmit] = useState(false)

  const ratingSelect = (e) => {
    e.preventDefault()
    let value = e.target.value
    setRating(+value)
    console.log(rating)
  }

  const submitRating = (e) => {
    e.preventDefault()
    if (rating) {
      setSubmit(true)
      console.log(submit)
    }
  }

  return (
    <>
      {!submit && (
        <div className='card-container'>
          <div className='star-wrap'>
            <Star />
          </div>

          <h1 className='card-header'>How did we do?</h1>
          <p className='card-text'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className='numbers'>
            <input
              value={1}
              type='button'
              className={rating === 1 ? 'numberbtn active' : 'numberbtn'}
              onClick={ratingSelect}
            />
            <input
              value={2}
              type='button'
              className={rating === 2 ? 'numberbtn active' : 'numberbtn'}
              onClick={ratingSelect}
            />
            <input
              value={3}
              type='button'
              className={rating === 3 ? 'numberbtn active' : 'numberbtn'}
              onClick={ratingSelect}
            />
            <input
              value={4}
              type='button'
              className={rating === 4 ? 'numberbtn active' : 'numberbtn'}
              onClick={ratingSelect}
            />
            <input
              value={5}
              type='button'
              className={rating === 5 ? 'numberbtn active' : 'numberbtn'}
              onClick={ratingSelect}
            />
          </div>

          <button
            onClick={submitRating}
            type='submit'
            className={rating ? 'submit-btn disabled' : 'submit-btn'}
          >
            SUBMIT
          </button>
        </div>
      )}

      {submit ? <ThankYouCard value={rating} /> : ''}
    </>
  )
}

export default RatingsCard
