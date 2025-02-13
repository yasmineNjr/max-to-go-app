import React from 'react'
import Command from './Command'
import IconComponent from './IconComponent'

const Title = ({ source, commands, text, icon, commandText, commandIcon, onClickHandler }) => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center gap-2 text-foreground h-[50px] lg:h-[35px] font-bold  text-xl'>
          {icon}
          <h2>{text}</h2>
      </div>
      {
        source=== 'users' 
        ?
        <div className='flex flex-row items-center justify-center my-5 h-[50px] lg:h-[35px] gap-2'>
          {  
            commands.map((ico) => (
              <div onClick={ico.clickHandler}>
                <IconComponent icon={ico.commandIcon} tooltip={ico.commandText} />
              </div>
            ))
          }
        </div>
        :
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