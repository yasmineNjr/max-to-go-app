import Image from 'next/image'
import React from 'react'
import CommandButton from './CommandButton'

const NotificationItem = ({ img, name, text, date, isCommand}) => {
  return (
    <div className='border-b-2 border-textDefault w-full'>
      <div key={name} className='flex flex-row items-center p-3 w-full '>
          <Image src={img} alt='user' className='h-[75px] w-[75px] lg:h-[60px] lg:w-[60px] rounded-full'/>
          <div className='flex flex-col ml-5'>
            <div className='flex flex-col lg:flex-row p-1'>
                <h1 className='font-bold text-textDefault'>{name}</h1>
                <p className='font-normal text-textPrimary lg:ml-3'>{text}</p>
            </div>
            <p className='font-normal text-textPrimary'>{date}</p>
          </div>
      </div>
      {
        isCommand &&
        <div className='flex items-center flex-wrap justifiy-center gap-3 my-3 w-full'>
          <CommandButton title='Delete' styles='bg-black '/>
          <CommandButton title='Consent' styles='bg-black '/>
          <CommandButton title='Email Correspondence' styles='bg-black '/>
        </div>
      }
   </div>
  )
}

export default NotificationItem