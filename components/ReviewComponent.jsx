import Image from 'next/image'
import React from 'react'

const ReviewComponent = ({ id, img, text }) => (
  
    <div key={id} className="flex flex-row items-end justify-between gap-2 cursor-pointer mt-5">
        <Image src={img} alt='user' className='h-[30px] w-[30px] rounded-full'/>
        <div className="bg-secondary w-full p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl flex items-center">
          <p className="w-full text-left text-foreground font-light">{text}</p>
        </div>
    </div>
  )

export default ReviewComponent