'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import CompanyLogo from './CompanyLogo'

const UserComponent = ({ id, img, name }) => {

    const router = useRouter();
    const viewUserInfoHandler = () => {
        router.push(`/users/${id}`)
    }

  return (
    <div 
        className="flex flex-row items-center gap-2 cursor-pointer"
        onClick={viewUserInfoHandler}
    >
        {/* <Image src={img} alt='user' className='h-[30px] w-[30px] rounded-full'/> */}
        <CompanyLogo logoUrl={img}/>
       
       <div className='flex flex-col ml-2'>
        <p className="w-full text-left text-textDefault font-light">{name}</p>
        <p className="w-full text-left text-gray-600 font-light text-[14px]">online</p>
       </div>
        
    </div>
  )
}

export default UserComponent