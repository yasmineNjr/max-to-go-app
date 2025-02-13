import styles from '@/app/styles';
import CommandButton from '@/components/CommandButton';
import ContentComponent from '@/components/ContentComponent';
import InvoiceItem from '@/components/InvoiceItem';
import ProtectedRoute from '@/components/ProtectedRoute';
import { invoices, users } from '@/constants';
import Image from 'next/image';
import React from 'react'

const InvoicesPage = ({ params }) => {

    const user = users.find((user) => user.name === params.id);
    const invoice = invoices.find((inv) => inv.owner === user.name)
    
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} items-center justify-center h-full`}>
        {
          invoice ? 
          <InvoiceItem owner={invoice.owner} id={invoice.id} price={invoice.price} quantity={invoice.quantity}/>
          :
          <h2>No invoiced found for selected user!</h2>
        }
      </div>
    </ProtectedRoute>
  )
}

export default InvoicesPage