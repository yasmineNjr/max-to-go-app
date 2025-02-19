import React from 'react'
import CommandButton from './CommandButton'
import ContentComponent from './ContentComponent'
import Image from 'next/image'
import { user } from '@/public/assets'
import { FileText, Pencil, Send, Trash2 } from 'lucide-react'
import DeleteModal from './DeleteModal'

const InvoiceItem = ({ id, owner, price, quantity, date}) => {
  return (
    <div id={id} className='rounded-xl border border-border bg-secondary w-[300px] my-10 p-2 lg:p-5'>
      <div className='flex flex-row justify-center items-center w-full gap-5 text-textDefault'>
        <h3>Owner: </h3>
        <div className="flex flex-row items-center justify-between gap-2">
          <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/>
          <p className="w-full text-left text-textDefault font-light">{owner}</p>
        </div>
      </div>

      <div className='w-[100%] flex justify-start  mt-5 text-lef'>
        <ContentComponent title='ID' value={id}/>
      </div>

      <div className='w-[100%] flex justify-start mt-5'>
        <ContentComponent title='Date' value={date}/>
      </div>

      <div className='flex flex-row  mt-5 text-lef items-start w-full gap-5 text-textDefault'>
        <div className='w-[100%] lg:w-[50%] flex justify-start'>
          <ContentComponent title='Price' value={`$${price}`}/>
        </div>
        <div className='w-[100%] lg:w-[50%] flex justify-start'>
          <ContentComponent title='Quantity' value={quantity}/>
        </div>
      </div>

      <div className='w-[100%] flex justify-start mt-5'>
        <ContentComponent title='TOTAL' value={`$${quantity*price}`}/>
      </div>
     
      <div className="w-full p-2 flex flex-row gap-3 justify-between items-center mt-5">
        <div className='flex flex-row gap-5'>
          <Pencil size={16} className='cursor-pointer'/>
          <Send size={16} className='cursor-pointer'/>
          <FileText size={16} className='cursor-pointer'/>
        </div>
        <div>
          <DeleteModal source='deleteInvoice' title='Delete Invoice' actionTxt='Delete' buttonTxt={<Trash2 size={16} className="cursor-pointer m-2 hover:text-destructive"/>} text='Are you sure you want to delete this invoice, knowing that a notification will be sent to the user?'/>
        </div>
      </div>
    </div>
  )
}

export default InvoiceItem