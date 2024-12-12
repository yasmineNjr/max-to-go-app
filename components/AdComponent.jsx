import React from 'react'
import CommandButton from './CommandButton'
import Button from './Button'
import Image from 'next/image'

const AdComponent = ({ id, img}) => {

  return (
    <div key={id} 
         className="relative w-full h-96 lg:h-72 bg-gray-200 overflow-hidden border-2 border-secondaryColor rounded-xl"
    >
        {/* Image */}
        <Image
        src={img}
        alt="Descriptive Alt Text" 
        className="absolute w-full h-full object-cover" 
        />
        {/* Buttons */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-center p-2 flex flex-wrap gap-3 justify-start bg-textSecondary h-fit">
            <CommandButton title='Delete'/>
            <CommandButton title='Amendment'/>
            <CommandButton title='Pause a temporary display'/>
            <Button title='Change the display duration'/>
        </div>
    </div>
  )
}

export default AdComponent