import Image from 'next/image'
import React from 'react'

const NotificationItem = ({ img, name, text, date}) => {
  return (
    <div key={name} className='flex flex-row items-center p-3 w-full border-b-2 border-textDefault'>
        <Image src={img} alt='user' className='h-[75px] w-[75px] lg:h-[60px] lg:w-[60px] rounded-full'/>
        <div className='flex flex-col ml-5'>
        <div className='flex flex-col lg:flex-row p-1'>
            <h1 className='font-bold text-textDefault'>{name}</h1>
            <p className='font-normal text-textPrimary lg:ml-3'>{text}</p>
        </div>
        <p className='font-normal text-textPrimary'>{date}</p>
        </div>
    </div>
  )
}

export default NotificationItem