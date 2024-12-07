import { search, user } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'

const Header = () => {
  return (
    <div className='w-full h-20 bg-primaryColor rounded-b-2xl flex flex-row items-center justify-between p-5'>
      <div className='flex flex-row items-center justify-center  gap-2'>
        <Image src={user} alt='user' className='h-[50px] w-[50px] rounded-full'/>
        <h3>Welcome Back Ali</h3>
      </div>
      
      <div className='flex justify-end ml-5 rounded-2xl border border-textPrimary bg-textDefault'>
        <Image
            src={search}
            alt='user'
            width={24}
            height={24}
            className="mr-1 ml-2 bg-transparent"
        />
        <Input
          placeholder='Search...'
          className="shad-input border-0 text-textPrimary"
        />
      </div>
      
    </div>
  )
}

export default Header