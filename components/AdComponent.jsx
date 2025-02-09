import React from 'react'
import CommandButton from './CommandButton'
import Image from 'next/image'
import ConfirmationModal from './ConfirmationModal'
import { MonitorCog, MonitorPause, Pencil, Trash2 } from 'lucide-react'
import DeleteModal from './DeleteModal'

const AdComponent = ({ id, img}) => {

  return (
    <div key={id} 
         className="relative w-full h-96 lg:h-72 bg-gray-200 overflow-hidden border border-border rounded-xl"
    >
        <Image
        src={img}
        alt="Descriptive Alt Text" 
        className="absolute w-full h-full object-cover" 
        />
        <div className="absolute bottom-0 left-0 w-full bg-secondary text-center p-2 flex flex-wrap gap-3 justify-between items-center">
          <div className='flex flex-row gap-5 mx-3'>
            <Pencil size={16} className='cursor-pointer'/>
            <ConfirmationModal  title='Stop Advertisement' 
                                actionTxt='Stop' 
                                command={true} 
                                buttonText={<MonitorPause size={16} 
                                className='cursor-pointer'/>} 
                                text='Do you really want to stop the show?'/>
            
            <ConfirmationModal  title='Change The Display Duration' 
                                actionTxt='Change' 
                                command={false} 
                                buttonText={<MonitorCog size={16} className='cursor-pointer'/>}
                                text='Change the display duration for advertisement'
                                form={true}/>
          </div>
          <div>
            <DeleteModal source='deleteAd' title='Delete Adevertisement' actionTxt='Delete' buttonTxt={<Trash2 size={16} className="cursor-pointer m-2 hover:text-destructive"/>} text='Are you sure you want to delete this advertisement, knowing that a notification will be sent to the user?'/>
          </div>
        </div>
    </div>
  )
}

export default AdComponent