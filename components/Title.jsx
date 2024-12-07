import React from 'react'

const Title = ({ text }) => {
  return (
    <div className='flex items-center justify-center rounded-2xl text-primaryColor bg-secondaryColor w-full h-[35px]'>
        <h2>{text}</h2>
    </div>
  )
}

export default Title