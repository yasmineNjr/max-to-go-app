import styles from '@/app/styles'
import NewInvoiceForm from '@/components/forms/NewInvoiceForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import Title from '@/components/Title'
import React from 'react'

const NewInvoicePage = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} `}>
        <Title text='Create a new invoice'/>
        <div className='bg-secondary w-full rounded-2xl flex flex-col items-center justify-center mb-25 mt-5 p-5'>
        {/* w-[95%] lg:w-[75%]  */}
          <NewInvoiceForm />
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default NewInvoicePage