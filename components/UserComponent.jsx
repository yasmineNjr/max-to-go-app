'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserComponent = ({ id, img, name }) => {

    const router = useRouter();
    const viewUserInfoHandler = () => {
        router.push(`/users/${id}`)
    }

  return (
    <div 
        className="flex flex-row items-center justify-between gap-2 cursor-pointer"
        onClick={viewUserInfoHandler}
    >
        <Image src={img} alt='user' className='h-[30px] w-[30px] rounded-full'/>
        <p className="w-full text-left text-textDefault font-light">{name}</p>
    </div>
  )
}

export default UserComponent