import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import ConfirmationModal from './ConfirmationModal';
import CommandButton from './CommandButton';

const JobsItem = ({ id, name, city, country, description}) => {
    
  return (
    <div key={id} className='border-b border-foreground w-full flex flex-col lg:flex-row justify-between py-5'>
        <div className='flex flex-col '>
            <h1 className='font-bold text-foreground'>{name}</h1>
            <div className='flex flex-row items-center my-1'>
                <MdOutlineEmail size={20} className='mr-1 text-primary'/>
                <h3>{city}-{country}</h3>
            </div>
            <p className='font-normal text-foreground mr-1'>{description}</p>
        </div>

        <div className='flex items-center justify-start lg:justify-end flex-wrap gap-3 my-3 w-full'>
            <ConfirmationModal command={true} buttonText='Delete' text='Are you sure you want to delete this jjob application, knowing that a notification will be sent to the user?'/>
            <CommandButton title='View CV'/>
        </div>
   </div>
  )
}

export default JobsItem