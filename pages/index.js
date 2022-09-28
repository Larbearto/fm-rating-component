import Head from 'next/head'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import Button from '../components/Button'
import Ratings from '../components/Ratings'

export default function Home() {
  return (
    <div className='min-h-screen justify-center flex flex-col items-center '>
      <div className='h-[420px] w-[420px] bg-gradient-to-tr from-verydarkblue to-darkblue rounded-3xl text-white  '>
        <div className='flex flex-col justify-center m-8 space-y-5'>
          <div className='flex'>
            <div className='bg-darkblue p-3 rounded-full z-50 border-1 '>
              <AiFillStar className='text-primary text-xl' />
            </div>
          </div>
          <h1 className='text-3xl font-semibold '>How did we do?</h1>
          <p className='text-mediumgrey text-sm'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <Ratings />
          <Button />
        </div>
      </div>
    </div>
  )
}
