import styles from '@/app/styles'
import NewInvoiceForm from '@/components/forms/NewInvoiceForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import Title from '@/components/Title'
import React from 'react'

const NewInvoicePage = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} items-center justify-center`}>
        <Title text='+ Create a new invoice'/>
        <div className='bg-secondary rounded-2xl flex flex-col items-center justify-center w-[95%] lg:w-[75%] mb-25 mt-5 p-5'>
          <NewInvoiceForm />
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default NewInvoicePage