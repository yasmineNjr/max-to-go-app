'use client'

import React, { useState } from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import Command from '@/components/Command'
import Button from '@/components/Button'
import { invoices, tasks } from '@/constants'
import InvoiceItem from '@/components/InvoiceItem'
import TaskItem from '@/components/TaskItem'

const Archives = () => {

  const [activeTab, setActiveTab] = useState('Invoices')

  const changeStateHandler = (txt) => {
    setActiveTab(txt)
  }
  
  return  (
    <div className={`${styles.mainSection} h-full bg-black`}>
      <Title text='Archive'/>
      <div className='flex flex-row justify-center items-center gap-20'>
        {
          activeTab === 'Tasks' ?
          <Command text='Tasks' onClickHandler={() => changeStateHandler('Invoices')}  /> :
          <Button title='Tasks' />
        }
        {
          activeTab === 'Invoices' ?
          <Command text='Invoices' onClickHandler={() => changeStateHandler('Tasks')}/> : 
          <Button title='Invoices' />
        }
       
      </div>
      {
        activeTab === 'Tasks' 
        ? 
        <div className='flex flex-wrap w-full gap-10 justify-center'>
        { 
          invoices.filter((inv) => (inv.isArchive)).map((invoice) => (
              <InvoiceItem owner={invoice.owner} id={invoice.id} price={invoice.price} quantity={invoice.quantity}/>
            ))
          }
        </div> 
        : 
        <div className='flex flex-col w-full gap-3 justify-center'>
        { 
          tasks.map((task) => (
              <TaskItem id={task.id} 
                        owner={task.owner} 
                        name={task.name} 
                        date={task.date} 
                        type={task.type} 
                        icon={task.icon} 
                        city={task.city}
                        price={task.price}
                        source='archive'
              />
            ))
          }
        </div> 
      }
    </div>
  )
}

export default Archives