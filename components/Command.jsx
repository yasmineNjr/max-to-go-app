import React from 'react'

const Command = ({ icon, text }) => {
  return (
    <div className='flex flex-row items-center justify-center my-5 h-[35px] w-fit px-5 gap-2 border border-secondaryColor rounded-xl text-textDefault'>
        {icon}
        <h3>{text}</h3>
    </div>
  )
}

export default Command