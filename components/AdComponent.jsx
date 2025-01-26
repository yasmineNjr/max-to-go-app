import React from 'react'
import CommandButton from './CommandButton'
import Image from 'next/image'
import ConfirmationModal from './ConfirmationModal'

const AdComponent = ({ id, img}) => {

  return (
    <div key={id} 
         className="relative w-full h-96 lg:h-72 bg-gray-200 overflow-hidden border border-primary rounded-xl"
    >
        <Image
        src={img}
        alt="Descriptive Alt Text" 
        className="absolute w-full h-full object-cover" 
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent text-center p-2 flex flex-wrap gap-3 justify-start bg-textSecondary h-fit">
            <CommandButton title='Delete'/>
            <CommandButton title='Amendment'/>
            <ConfirmationModal command={true} buttonText='Pause a temporary display' text='Do you really want to stop the show?'/>
            <ConfirmationModal command={false} 
                                buttonText='Change the display duration' 
                                text='Change the display duration'
                                form={true}/>
        </div>
    </div>
  )
}

export default AdComponent