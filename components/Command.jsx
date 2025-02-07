import React from 'react'

const Command = ({ icon, text, onClickHandler }) => {
  return (
    // w-fit 
    <div 
      className='flex flex-row items-center justify-center my-5 h-[50px] lg:h-[35px] px-2 md:px-5 gap-1 border border-primary rounded-xl text-primary cursor-pointer'
      onClick={onClickHandler}
    >
        {icon}
        <h3>{text}</h3>
    </div>
  )
}

export default Command