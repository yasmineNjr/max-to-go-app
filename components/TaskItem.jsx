import { user } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import CommandButton from './CommandButton'
import ContentComponent from './ContentComponent'

const TaskItem = ({ id, owner, name, date, type, icon, city, price, status, source, command1, command2, command3, command4, command5, command6 }) => {
  return (
    <div key={id}
         className='rounded-xl border border-border bg-accent w-full my-5 p-5'
    >
        <div className='flex flex-row items-center w-full gap-5 text-foreground'>
            <h3 className='font-bold text-foreground'>Owner: </h3>
            <div className="flex flex-row items-center justify-between gap-2">
                <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/>
                <p className="w-full text-left text-foreground font-light">{owner}</p>
            </div>
        </div>

        {
            source === 'individual' &&
            <div className='pt-4'>
                <ContentComponent title='Status' value={status}/>
            </div>

        }

        <div className='flex flex-col lg:flex-row justify-between w-full pt-4'>
            <div className='flex flex-col'>
                <ContentComponent title='Name' value={name}/>
                <ContentComponent title='Date' value={date}/>
            </div>

            <div className='flex flex-col'>
                <ContentComponent title='Type' value={type}/>
                <div className='flex flex-row w-full justify-center my-1'>
                    {icon}
                </div>
            </div>
            
            <div className='flex flex-col'>
                <ContentComponent title='City' value={city}/>
                <ContentComponent title='Price' value={price}/>
            </div>
        </div>

        {
            source !== 'archive' && 
            <div className='flex flex-wrap items-center justify-center gap-3 mt-5'>
                <CommandButton title={command1}/>
                <CommandButton title={command2}/>
                <CommandButton title={command3}/>
                {command4 !== undefined && <CommandButton title={command4}/>}
                {command5 !== undefined && <CommandButton title={command5}/>}
                {command6 !== undefined && <CommandButton title={command6}/>}
            </div>
        }
    </div>
  )
}

export default TaskItem