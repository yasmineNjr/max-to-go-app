import React from 'react'

const Title = ({ text }) => {
  return (
    <div className='flex items-center justify-center rounded-2xl px-5 text-primaryColor bg-secondaryColor w-full h-[50px] lg:h-[35px] font-bold'>
        <h2>{text}</h2>
    </div>
  )
}

export default Title