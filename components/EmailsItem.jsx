import React from 'react'
import EmailModal from './EmailModal';
import { Mail, Trash2 } from 'lucide-react';
import DeleteModal from './DeleteModal';
import Image from 'next/image';
import { user } from '@/public/assets';

const EmailsItem = ({ id, name, date, message, title }) => {
    
  return (
    <div key={id} className='border-b border-foreground w-full flex flex-row justify-between cursor-pointer'>
      <EmailModal buttonText={
                     <div className='flex flex-row items-center p-3 w-full '>
                     <Image src={user} alt='user' className='h-[75px] w-[75px] lg:h-[60px] lg:w-[60px] rounded-full'/>
                     <div className='flex flex-row ml-5 justify-between items-center  w-full'>
                       <div className='w-full flex flex-col items-start'>
                         <h1 className='font-bold text-foreground'>{name}</h1>
                         <p className='font-normal text-textPrimary text-sm'>{date}</p>
                       </div>
                       <div className=' flex w-full font-normal text-foreground text-sm'>
                         <p className=''>{title}</p>
                       </div>
                     </div>
                   </div>
                  } 
                  name={name} 
                  text={message}
      />
       
        <div className='flex items-center justify-end flex-wrap gap-3 my-3 w-full'>
          <DeleteModal source='delete' title='Delete Email' actionTxt='Delete' buttonTxt={<Trash2 size={16} className="m-2 hover:text-destructive"/>} text='Are you sure you want to delete this email, knowing that a notification will be sent to the user?'/>
        </div>
   </div>
  )
}

export default EmailsItem