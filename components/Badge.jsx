'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const Badge = ({ icon, text, style, source, user }) => {
    
  const router = useRouter();

  const onClickHandler = () => {
    if(source === 'password')
      router.push(`/users/${user}/change-password`)
    else if(source === 'message')
      router.push(`/users/${user}/send-message`)
    else if(source === 'invoices')
      router.push(`/users/${user}/invoices`)
  }

  return (
    <div 
      className={`min-w-[60px] flex justify-center text-center w-fit items-center gap-1 rounded-full px-2 py-2 ${style}`} 
      onClick={onClickHandler}
    >
        {icon}
        <p className='text-textDefault font-light'>
            {text}
        </p>
    </div>
  )
}

export default Badge