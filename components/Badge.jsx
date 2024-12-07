import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";

const Badge = ({ icon, text, style }) => {
    
  return (
    <div className={`min-w-[60px] flex justify-center text-center w-fit items-center gap-1 rounded-full px-2 py-2 ${style}`} >
        {icon}
        <p className='text-textDefault font-light'>
            {text}
        </p>
    </div>
  )
}

export default Badge