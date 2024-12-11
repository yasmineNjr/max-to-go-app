import React from 'react'
import CommandButton from './CommandButton'
import ContentComponent from './ContentComponent'
import Image from 'next/image'
import { user } from '@/public/assets'

const InvoiceItem = ({ id, owner, price, quantity}) => {
  return (
    <div id={id} className='rounded-xl border-2 border-textPrimary bg-blue-400 w-[300px] my-10 p-2 lg:p-5'>
      <div className='flex flex-row justify-center items-center w-full gap-5 text-textDefault'>
        <h3>Owner: </h3>
        <div className="flex flex-row items-center justify-between gap-2">
          <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/>
          <p className="w-full text-left text-textDefault font-light">{owner}</p>
        </div>
      </div>

      <div className='w-[100%] flex justify-start  mt-5 text-lef'>
        <ContentComponent title='ID: ' value={id}/>
      </div>

      <div className='flex flex-row  mt-5 text-lef items-start w-full gap-5 text-textDefault'>
        <div className='w-[100%] lg:w-[50%] flex justify-start'>
          <ContentComponent title='Price: ' value={`$${price}`}/>
        </div>
        <div className='w-[100%] lg:w-[50%] flex justify-start'>
            <ContentComponent title='Quantity: ' value={quantity}/>
        </div>
      </div>

      <div className='w-[100%] flex justify-start mt-5'>
        <ContentComponent title='TOTAL: ' value={`$${quantity*price}`}/>
      </div>
     
      <div className='flex items-center flex-wrap justifiy-center gap-3 my-3 w-full'>
        <CommandButton title='Delete' styles='bg-transparent border-2'/>
        <CommandButton title='Amendment' styles='bg-transparent border-2'/>
        <CommandButton title='Send' styles='bg-transparent border-2'/>
        <CommandButton title='Export to PDF' styles='bg-transparent border-2'/>
    </div>
    </div>
  )
}

export default InvoiceItem