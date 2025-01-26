import React from 'react'

const Command = ({ icon, text, onClickHandler }) => {
  return (
    <div 
      className='flex flex-row items-center justify-center my-5 h-[50px] lg:h-[35px] w-fit px-5 gap-2 border border-primary rounded-xl text-primary cursor-pointer'
      onClick={onClickHandler}
    >
        {icon}
        <h3>{text}</h3>
    </div>
  )
}

export default Command