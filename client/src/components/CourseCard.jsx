import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'

const CourseCard = ({course}) => {
  return (
    <Card className="bg-white shadow-lg">
     <img src={course.image} alt="" srcset=""  className='w-full h-48 object-cover'/>
     <div className='p-6'>
     <h2 className='text-xl font-semibold text-gray-800 mb-3'>{course.title}</h2>
     <p className='text-gray-600 mb-4'>{course.description}</p>
     <Button>Lean More</Button>
     </div>

    </Card>
  )
}

export default CourseCard
