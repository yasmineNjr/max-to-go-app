import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import ConfirmationModal from './ConfirmationModal';
import EmailModal from './EmailModal';

const EmailsItem = ({ id, name, date, message, title }) => {
    
  return (
    <div key={id} className='border-b-2 border-textDefault w-full flex flex-row justify-between '>
        <div key={name} className='flex flex-row items-center p-3 w-full '>
            <MdOutlineEmail color='#FECC02' size={42}/>
            <div className='flex flex-col ml-5'>
            <h1 className='font-bold text-textDefault'>{name} - <span className='text-[14px] font-normal'>{title}</span></h1>
            {/* <p className='font-normal text-textPrimary'>{title}</p> */}
            <p className='font-normal text-textPrimary'>{date}</p>
            </div>
        </div>
        <div className='flex items-center justify-end flex-wrap gap-3 my-3 w-full'>
            <ConfirmationModal command={true} buttonText='Delete' text='Are you sure you want to delete this email, knowing that a notification will be sent to the user?'/>
            <EmailModal buttonText='View' name={name} text={message}/>
        </div>
   </div>
  )
}

export default EmailsItem