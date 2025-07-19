import React from 'react'
import { GraduationCap } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(store => store.auth)

  const logoutHandle = async (e) =>{
    try {
      const res = await axios.get('http://localhost:5000/api/v1/user/logout', {withCredentials:true});
      if (res.data.success) {
        dispatch(setUser(null))
        toast.success(res.data.message)
        
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
      
    }
  }
  return (
    <div className='bg-green-900 z-50 w-full py-3 fixed top-0'>
      <div className='max-w-7xl mx-auto flex justify-between items-center px-6'>
        {/* Logo */}
        <Link to='/'>
          <div className='flex gap-1 items-center'>
            <GraduationCap className='text-green-100 w-10 h-10' />
            <h1 className='text-green-100 text-3xl font-bold'>LMS</h1>
          </div>
        </Link>

        {/* Menu */}
        <div className='flex items-center gap-7 text-white text-xl font-semibold'>
          <Link to='/'>Home</Link>
          <Link to='/courses'>Courses</Link>

          {!user ? (
            <>
              <Link to='/login'>
                <Button className="bg-blue-500 hover:bg-blue-600">Login</Button>
              </Link>
              <Link to='/signup'>
                <Button className="bg-gray-700 hover:bg-gray-800">Signup</Button>
              </Link>
            </>
          ) : (
            <div className='flex items-center gap-3'>
              <Link to="/profile">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>
              <Button onClick={logoutHandle} className="bg-blue-500 hover:bg-blue-600">Logout</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
