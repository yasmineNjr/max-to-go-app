import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import CommandButton from './CommandButton';

const EmailsItem = ({ id, name, date, message }) => {
  return (
    <div key={id} className='border-b-2 border-textDefault w-full flex flex-row justify-between '>
        <div key={name} className='flex flex-row items-center p-3 w-full '>
            <MdOutlineEmail color='#FECC02' size={42}/>
            <div className='flex flex-col ml-5'>
            <h1 className='font-bold text-textDefault'>{name}</h1>
            <p className='font-normal text-textPrimary'>{date}</p>
            </div>
        </div>
        <div className='flex items-center justify-end flex-wrap gap-3 my-3 w-full'>
            <CommandButton title='Delete' styles='bg-black '/>
            <CommandButton title='View' styles='bg-black '/>
        </div>
   </div>
  )
}

export default EmailsItem