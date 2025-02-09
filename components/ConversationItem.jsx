import Image from 'next/image'
import React from 'react'
import CommandButton from './CommandButton'

const ConversationItem = ({ id, img, name, message, date, isCommand, command1, command2, command3, unread}) => {
  return (
    <div className='border-b border-foreground w-full'>
      <div className='flex flex-row justify-between items-center'>
        <div key={name} className='flex flex-row items-center p-3 '>
            <Image src={img} alt='user' className='h-[75px] w-[75px] lg:h-[60px] lg:w-[60px] rounded-full'/>
            <div className='flex flex-col ml-5'>
                <h1 className='font-bold text-foreground'>{name}</h1>
                <p className='font-normal text-foreground mt-2'>{message}</p>
            </div>
        </div>
        <div className=' flex flex-col w-35 p-3 items-center justify-center gap-2'>
          <p className='w-full font-normal text-foreground'>{date}</p>
          {unread !== 0 && <div className='rounded-full bg-primary flex justify-center items-center h-[35px] w-[35px]'>{unread}</div>}
        </div>
      </div>
      {
        isCommand &&
        <div className='flex items-center flex-wrap justifiy-center gap-3 my-3 w-full'>
          <CommandButton title={command1} styles='bg-background '/>
          <CommandButton title={command2} styles='bg-background '/>
          <CommandButton title={command3} styles='bg-background '/>
        </div>
      }
   </div>
  )
}

export default ConversationItem