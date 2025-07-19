import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  })
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setUser((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const handleSumbit = async (e) =>{
    e.preventDefault(),
    console.log(user)
     try {
      const response = await axios.post('http://localhost:5000/api/v1/user/register', user,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })
      if (response.data.success) {
        navigate("/login")
        toast.success(response.data.message)
      }else{
        toast.error("something error")
      }
     } catch (error) {
      console.log(error)
     }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-25 mb-5'>
        <h1 className='text-2xl font-bold text-center text-gray-800 mb-4'>Register Your Account</h1>
        <p className='text-center text-gray-600 mb-8'>Sign up now — it's fast, free, and simple!</p>
        {/* name or input fields */}
        <div className='mb-4'>
          <Label>Full Name</Label>
          <Input placeholder='Enter your Name' className='mt-2'
            name="name"
            value={user.name}
            onChange={handleChange}
            type="text"
            id="name"
          />
        </div>
        <div className='mb-4'>
          <Label>Email Address</Label>
          <Input placeholder='Enter your Email' className='mt-2'
            type="text"
            name="email"
            value={user.email}
             onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <Label>Password</Label>
          <Input placeholder='Create a Password' className='mt-2' 
          name="password"
          type="password"
          value={user.password}
           onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <Label>Role</Label>
          <RadioGroup className='flex gap-4 mt-2'>
            <div className="flex items-center space-x-2">
             <input 
             type="radio"
             id="role1"
             name="role"
             value="student"
             checked={user.role === 'student'}
             onChange={handleChange}
             />
              <Label htmlFor="role1">Students</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="radio"
             id="role2"
             name="role"
             value="teacher"
             checked={user.role === 'teacher'}
             onChange={handleChange}
             />
              <Label htmlFor="role2">Teachers</Label>
            </div>
          </RadioGroup>
        </div>
        <Button onClick={handleSumbit} className='w-full bg-blue-500 hover:bg-blue-600'>Signup</Button>
        <p className='text-center mt-4' >Already Create a account? <Link to='/login' className='text-blue-500 hover:underline'>Log in</Link></p>
      </div>
    </div>
  )
}

export default Signup
