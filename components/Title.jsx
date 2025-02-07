import React from 'react'
import Command from './Command'

const Title = ({ text, icon, commandText, commandIcon, onClickHandler }) => {
  return (
    <div className='flex flex-row justify-between items-center'>
      {/* <div className='flex flex-row items-center gap-2 justify-center rounded-2xl px-5 text-foreground bg-secondary border border-primary w-full h-[50px] lg:h-[35px] font-bold'> */}
      <div className='flex flex-row items-center gap-2 text-foreground h-[50px] lg:h-[35px] font-bold  text-xl'>
          {icon}
          <h2>{text}</h2>
      </div>
      {
        commandText &&
        <Command  icon={commandIcon} 
                  text={commandText}
                  onClickHandler={onClickHandler}
        />
      }
    </div>
  )
}

export default Title