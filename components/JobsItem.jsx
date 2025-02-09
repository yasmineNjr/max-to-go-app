import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import ConfirmationModal from './ConfirmationModal';
import CommandButton from './CommandButton';
import { FileUser, Trash2 } from 'lucide-react';
import DeleteModal from './DeleteModal';

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
            <FileUser size={16} className="cursor-pointer m-2"/>
            <DeleteModal source='deletejob' title='Delete Job' actionTxt='Delete' buttonTxt={<Trash2 size={16} className="cursor-pointer m-2 hover:text-destructive"/>} text='Are you sure you want to delete this job application, knowing that a notification will be sent to the user?'/>
        </div>
   </div>
  )
}

export default JobsItem