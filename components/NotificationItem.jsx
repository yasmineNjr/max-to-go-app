'use client'

import Image from 'next/image'
import React from 'react'
import CommandButton from './CommandButton'
import { useRouter } from 'next/navigation'

const NotificationItem = ({ img, name, text, date, isCommand, command1, command2, command3}) => {

  const router = useRouter();
  const onClickHandler = () => {
    if(text === 'create account'){
      router.push(`/users/${name}?source=notification`)
    }
  }

  return (
    <div  
         className='border-b border-foreground w-full cursor-pointer'
         onClick={onClickHandler}>
      <div key={name} className='flex flex-row items-center p-3 w-full '>
          <Image src={img} alt='user' className='h-[75px] w-[75px] lg:h-[60px] lg:w-[60px] rounded-full'/>
          <div className='flex flex-col ml-5 justify-start'>
            <div className='flex flex-col lg:flex-row p-1 items-center'>
                <h1 className='font-bold text-foreground w-full'>{name}</h1>
                <p className='font-normal text-foreground lg:ml-3 text-sm'>{text}</p>
            </div>
            <p className='font-normal text-textPrimary text-sm'>{date}</p>
          </div>
      </div>
      {
        isCommand &&
        <div className='flex items-center flex-wrap justifiy-center gap-3 my-3 w-full'>
          <CommandButton title={command1} styles='bg-background'/>
          <CommandButton title={command2} styles='bg-background'/>
          <CommandButton title={command3} styles='bg-background'/>
        </div>
      }
   </div>
  )
}

export default NotificationItem