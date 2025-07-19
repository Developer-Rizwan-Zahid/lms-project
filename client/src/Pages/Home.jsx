import Hero from '@/components/Hero'
import React from 'react'
import { courseJson } from './Courses'
import CourseCard from '@/components/CourseCard'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='py-10'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>My Courses</h1>
        <p className='text-center text-gray-600 mb-12'>My courses offer practical skills, expert guidance, and real-world knowledge to help you grow, succeed, and achieve your personal or professional goals</p>
        <div className=' max-w-7xl mx-auto grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            courseJson.slice(0, 9).map((course) => {
              return <CourseCard course={course} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
