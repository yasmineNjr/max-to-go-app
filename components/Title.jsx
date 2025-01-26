import React from 'react'

const Title = ({ text, icon }) => {
  return (
    <div className='flex flex-row items-center gap-2 justify-center rounded-2xl px-5 text-foreground bg-secondary border border-primary w-full h-[50px] lg:h-[35px] font-bold'>
        {icon}
        <h2>{text}</h2>
    </div>
  )
}

export default Title