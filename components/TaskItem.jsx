import { user } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import CommandButton from './CommandButton'
import ContentComponent from './ContentComponent'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { abbreviateUserName } from '@/constants';
import IconComponent from './IconComponent'

const TaskItem = ({ id, owner, name, date, type, icon, city, price, status, source, commands, command1, command2, command3, command4, command5, command6 }) => {
  return (
     <Card key={id} className='bg-secondary'>
      <CardHeader>
        <CardTitle className='flex flex-row items-center w-full gap-5 text-foreground'>
            <h3 className='font-bold text-foreground'>Owner: </h3>
             <div className="flex flex-row items-center justify-between gap-2">
                 {/* <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/> */}
                 <Avatar className='ring-2 ring-transparent hover:ring-secondary/50 transition-[box-shadow]'>
                    <AvatarImage src={user} className={'object-cover'}/>
                    <AvatarFallback className='font-medium text-sm bg-background'>{abbreviateUserName(owner)}</AvatarFallback>
                  </Avatar>
                 <p className="w-full text-left text-foreground font-light">{owner}</p>
             </div>
        </CardTitle>
        {
            source === 'individual' &&
            <CardDescription>
                <p >{status}</p>
            </CardDescription>
        }
      </CardHeader>
      <CardContent className='flex flex-col lg:flex-row justify-between'>
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
      </CardContent>
      <CardFooter className='justify-center gap-3 py-2 mt-2'>
        {
          commands &&
            commands.map((command) => (
                <IconComponent icon={command.icon} tooltip={command.tooltip} onClickHandler={command.onClickHandler}/>
            ))
        }
      </CardFooter>
    </Card>
  )
}

export default TaskItem

// <div key={id}
    //      className='rounded-xl border border-border bg-accent w-full my-5 p-5'
    // >
    //     <div className='flex flex-row items-center w-full gap-5 text-foreground'>
    //         <h3 className='font-bold text-foreground'>Owner: </h3>
    //         <div className="flex flex-row items-center justify-between gap-2">
    //             <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/>
    //             <p className="w-full text-left text-foreground font-light">{owner}</p>
    //         </div>
    //     </div>

    //     {
    //         source === 'individual' &&
    //         <div className='pt-4'>
    //             <ContentComponent title='Status' value={status}/>
    //         </div>

    //     }

    //     <div className='flex flex-col lg:flex-row justify-between w-full pt-4'>
    //         <div className='flex flex-col'>
    //             <ContentComponent title='Name' value={name}/>
    //             <ContentComponent title='Date' value={date}/>
    //         </div>

    //         <div className='flex flex-col'>
    //             <ContentComponent title='Type' value={type}/>
    //             <div className='flex flex-row w-full justify-center my-1'>
    //                 {icon}
    //             </div>
    //         </div>
            
    //         <div className='flex flex-col'>
    //             <ContentComponent title='City' value={city}/>
    //             <ContentComponent title='Price' value={price}/>
    //         </div>
    //     </div>

    //     {
    //         source !== 'archive' && 
    //         <div className='flex flex-wrap items-center justify-center gap-3 mt-5'>
    //             <CommandButton title={command1}/>
    //             <CommandButton title={command2}/>
    //             <CommandButton title={command3}/>
    //             {command4 !== undefined && <CommandButton title={command4}/>}
    //             {command5 !== undefined && <CommandButton title={command5}/>}
    //             {command6 !== undefined && <CommandButton title={command6}/>}
    //         </div>
    //     }
    // </div>