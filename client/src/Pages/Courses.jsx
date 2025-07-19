import CourseCard from '@/components/CourseCard'
import React from 'react'


export const courseJson = [
  {
    "id": 1,
    "title": "Web Development Bootcamp",
    "description": "Learn HTML, CSS, JavaScript, and React to build fully responsive websites from scratch.",
    "image":"https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
  },
  {
    "id": 2,
    "title": "Python Programming for Beginners",
    "description": "Understand Python fundamentals, loops, functions, and data structures with practical examples.",
    "image": "https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg"
  },
  {
    "id": 3,
    "title": "Mastering Data Analysis with Excel",
    "description": "Learn data sorting, filtering, pivot tables, and charts for powerful business insights.",
    "image": "https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg"
  },
  {
    "id": 4,
    "title": "Introduction to Graphic Design",
    "description": "Explore color theory, typography, and layout design using Adobe Photoshop and Illustrator.",
    "image": "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg"
  },
  {
    "id": 5,
    "title": "Digital Marketing 101",
    "description": "Learn SEO, social media marketing, content strategy, and Google Ads to grow any brand.",
    "image": "https://images.pexels.com/photos/6476255/pexels-photo-6476255.jpeg"
  },
  {
    "id": 6,
    "title": "React Native for Mobile Apps",
    "description": "Build cross-platform mobile applications using JavaScript and the React Native framework.",
    "image": "https://images.pexels.com/photos/39559/ipad-mockup-apple-business-39559.jpeg"
  },
  {
    "id": 7,
    "title": "Cybersecurity Fundamentals",
    "description": "Understand network security, firewalls, and ethical hacking basics to protect systems and data.",
    "image": "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
  },
  {
    "id": 8,
    "title": "Cloud Computing with AWS",
    "description": "Get hands-on with AWS services like EC2, S3, Lambda, and IAM for cloud-based apps.",
    "image": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
  },
  {
    "id": 9,
    "title": "UI/UX Design Principles",
    "description": "Learn to create user-friendly interfaces and experiences with wireframes, prototypes, and usability testing.",
    "image": "https://images.pexels.com/photos/9454347/pexels-photo-9454347.jpeg"
  },
  {
    "id": 10,
    "title": "Java Programming Masterclass",
    "description": "From variables to OOP and JDBC, master Java programming with real-world projects.",
    "image": "https://images.pexels.com/photos/1181297/pexels-photo-1181297.jpeg"
  },
  {
    "id": 11,
    "title": "Video Editing with Premiere Pro",
    "description": "Edit professional-quality videos using Adobe Premiere Pro’s tools, effects, and timeline features.",
    "image": "https://images.pexels.com/photos/8183113/pexels-photo-8183113.jpeg"
  },
  {
    "id": 12,
    "title": "SQL & Database Management",
    "description": "Write SQL queries, manage databases, and build relational models using MySQL and PostgreSQL.",
    "image": "https://images.pexels.com/photos/17489160/pexels-photo-17489160.jpeg"
  }
]

const Courses = () => {
  return (
    <div className='bg-gray-100 pt-14'>
      <div className='min-h-screen max-w-7xl mx-auto py-10'>
        <div className='px-4 '>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-4'>My Courses</h1>
          <p className='text-center text-gray-600 mb-12'>My courses offer practical skills, expert guidance, and real-world knowledge to help you grow, succeed, and achieve your personal or professional goals</p>
          <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              courseJson?.map((course)=>{
                return <CourseCard course={course}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
