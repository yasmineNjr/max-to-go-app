import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const IconComponent = ({ icon, tooltip, onClickHandler }) => {
  return (
    <div 
        // className='w-9 h-9 text-foreground bg-transparent rounded-md p-2 transition-colors hover:bg-secondary border border-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer shadow-sm'
        className='flex items-center justify-center w-9 h-9 text-foreground bg-transparent rounded-md p-2 transition-all hover:bg-secondary hover:shadow-md hover:shadow-black/30 border border-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer shadow-sm'
        onClick={onClickHandler}>
         <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>{icon}</TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
    </div>
  )
}

export default IconComponent