import { user } from '@/public/assets'
import Image from 'next/image'
import React from 'react'
import { HiTruck } from "react-icons/hi2";

const TaskItem = ({ id, owner, name, date, type, icon, city, price }) => {
  return (
    <div key={id}
         className='rounded-xl border-2 border-textPrimary bg-blue-400 w-full my-10 p-5'
    >
        <div className='flex flex-row items-center w-full gap-5 text-textDefault'>
            <h3 className='font-bold'>Owner: </h3>
            <div className="flex flex-row items-center justify-between gap-2">
            <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/>
            <p className="w-full text-left text-textDefault font-light">{owner}</p>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-between w-full pt-5'>
            <div className='flex flex-col pt-5'>
                <div className='flex flex-row w-full pt-1'>
                    <h3 className='w-fit font-bold'>Name: </h3>
                    <p className="w-fit text-left text-secondaryColor font-light">{name}</p>
                </div>
                <div className='flex flex-row w-full pt-1'>
                    <h3 className='w-fit font-bold'>Date: </h3>
                    <p className="w-fit text-left text-secondaryColor font-light">{date}</p>
                </div>
            </div>

            <div className='flex flex-col pt-5'>
                <div className='flex flex-row w-full pt-1'>
                    <h3 className='w-fit font-bold'>Type: </h3>
                    <p className="w-fit text-left text-secondaryColor font-light">{type}</p>
                </div>
                <div className='flex flex-row w-full justify-center'>
                    {/* <Image src={icon} alt='task type' width={50}/> */}
                    <HiTruck color='#FECC02' size={35}/>
                </div>
            </div>
            
            <div className='flex flex-col pt-5'>
                <div className='flex flex-row w-full pt-1'>
                    <h3 className='w-fit font-bold'>City: </h3>
                    <p className="w-fit text-left text-secondaryColor font-light">{city}</p>
                </div>
                <div className='flex flex-row w-full pt-1'>
                    <h3 className='w-fit font-bold'>Price: </h3>
                    <p className="w-fit text-left text-secondaryColor font-light">${price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskItem