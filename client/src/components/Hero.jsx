import { Award, Search, User } from 'lucide-react'
import React from 'react'
import Heroimage from '../assets/Heroimage.png'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <div className='bg-green-700 pt-14'>
      <div className='lg:h-[700px] max-w-7xl mx-auto flex md:flex-row flex-col gap-10 items-center px-[60px]'>
        {/* Text Section */}
        <div className='space-y-7 flex-1'>
          <h1 className='text-4xl mt-10 md:mt-0 md:text-6xl font-extrabold text-gray-200'>
            Your our <span className='text-blue-900'>16,000+</span><br /> Online courses all
          </h1>
          <p className='text-gray-300 text-lg'>
            Unlock your potential with 14,000+ online courses designed for learners of all skill levels
          </p>

          {/* Search Bar */}
          <div className='inline-flex relative'>
            <input
              type="text"
              placeholder='Search Your Courses...'
              className='bg-gray-300 w-[350px] md:w-[450px] text-gray-800 p-4 pr-40 rounded-lg rounded-r-xl placeholder:text-gray-500'
            />
            <button className='px-4 py-[14px] flex gap-1 items-center bg-blue-500 font-semibold absolute right-0 text-white rounded-r-lg text-xl'>
              Search <Search width={20} height={20} />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex md:h-[700px] items-end relative flex-1'>
          <img
            src={Heroimage}
            alt="Learning courses"
            className='w-[360px] shadow-blue-500 drop-shadow-lg'
          />

          {/* Active Students Counter */}
          <div className='bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[50%] right-2 px-4 py-2'>
            <div className='rounded-full bg-blue-400 p-2 text-white'>
              <User />
            </div>
            <div>
              <h2 className='font-bold text-2xl'>
                <CountUp end={7000} duration={3} />+
              </h2>
              <p className='italic text-sm text-gray-600 leading-none'>Active Students</p>
            </div>
          </div>

          {/* Certification Students Counter */}
          <div className='bg-slate-200 hidden md:flex gap-3 items-center rounded-md absolute top-[15%] left-8 px-4 py-2'>
            <div className='rounded-full bg-blue-400 p-2 text-white'>
              <Award />
            </div>
            <div>
              <h2 className='font-bold text-2xl'>
                <CountUp end={9000} duration={3} />+
              </h2>
              <p className='italic text-sm text-gray-600 leading-none'>Certification Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
