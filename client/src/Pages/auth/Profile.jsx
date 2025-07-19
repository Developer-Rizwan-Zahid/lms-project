import React, { useState } from 'react'
import ProfileLogo from '../../assets/profilelogo.jpg'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useSelector } from 'react-redux'


const Profile = () => {
  const {user} = useSelector(store=>store.auth)
  const {input, setInput} = useState({
    name:user?.name,
    description:user?.description,
    file:user?.photoUrl

  })
  return (
    <div className='bg-gray-100 py-12 px-4 lg:px-0'>
      <div className='max-w-6xl mx-auto p-8 bg-gradient-to-b-t0-4 bg-white shadow-xl rounded-2xl mt-14'>
        <div className='flex flex-col items center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-12'>
          <div className='w-40 h-40 rounded-full overflow-hidden border-4 border-green-900 shadow-lg '>
            <img src={user?.photoUrl || ProfileLogo} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold text-green-900'>Welcome, {user?.name.split(" ")[0] || "user"}</h1>
            <p className='text-lg text-gray-600 mt-3'><span className='font-bold'>Email :</span> {user?.email || "Email does not show"}</p>
            <p className='text-gray-600 my-1 capitalize'><span className='font-bold'>Role :</span> {user?.role}</p>
            <p className='text-gry-700 text-base leading-relaxed mb-3'>
              <span className='font-bold'>Bio :</span> {user?.description || "Add Bio"}</p>
            <Dialog>
              <DialogTrigger> <Button className="bg-blue-600">Edit Profile</Button></DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center">Update Profile</DialogTitle>
                  <DialogDescription className="text-center">
                    Update to your profile.
                  </DialogDescription>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="name" className='text-right'>
                      Name
                    </Label>
                    <Input type="text" 
                    id='name'
                    name="name"
                    value={input.name}
                    className='col-span-3 text-gray-600'
                    />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="name" className='text-right'>
                      Description
                    </Label>
                    <Input type="text" 
                    id='name'
                    name="name"
                    value={input.description}
                    className='col-span-3 text-gray-600'
                    />
                  </div>
                  <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="name" className='text-right'>
                      Picture
                    </Label>
                    <Input 
                    id='file'
                    type="file"
                    accept="image/"
                    className='w-[277px]'
                    />
                  </div>
                  <DialogFooter>
                    <Button className="bg-blue-500">Save Change</Button>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
