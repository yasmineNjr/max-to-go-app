import { logo } from '@/public/assets'
import Image from 'next/image'
import React from 'react'

const UserActionComponent = ({ title, form}) => {
  return (
    <div className='bg-blue-400 rounded-2xl flex flex-col items-center justify-center mb-25 w-full'>
        <Image src={logo} alt='logo' width={250} height={250} className='ml-5'/>
        <h1 className='text-[16px] lg:text-[20px] font-semibold mb-5'>{title}</h1>
        {form}
    </div>
  )
}

export default UserActionComponent