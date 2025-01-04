'use client'

import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import Command from '@/components/Command'
import { FaPlus } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import InvoiceItem from '@/components/InvoiceItem'
import { invoices } from '@/constants'
import ProtectedRoute from '@/components/ProtectedRoute'

const Invoices = () => {

  const router = useRouter();
  const newInvoiceHandler = () => {
    router.push('/invoices/create-new')
  }
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Invoices'/>
        <Command 
          icon={<FaPlus color='#FECC02'/>} 
          text='Create new invoice'
          onClickHandler={newInvoiceHandler}
        />
        <div className='flex flex-wrap w-full gap-10 justify-center'>
        { 
          invoices.map((invoice) => (
              <InvoiceItem owner={invoice.owner} id={invoice.id} price={invoice.price} quantity={invoice.quantity}/>
            ))
          }
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Invoices