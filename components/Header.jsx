import { user } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20 bg-primaryColor rounded-b-2xl flex flex-row items-center justify-between p-5'>
      <div className='flex flex-row items-center justify-center  gap-2'>
        <Image src={user} alt='user' className='h-[50px] w-[50px] rounded-full'/>
        <h3>Welcome Back Ali</h3>
      </div>
      <h2>search</h2>
    </div>
  )
}

export default Header