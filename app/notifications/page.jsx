'use client'

import Title from '@/components/Title'
import React from 'react'
import styles from '../styles'
import { notifications } from '@/constants';
import NotificationItem from '@/components/NotificationItem';
import { useRouter } from 'next/navigation';
import ProtectedRoute from '@/components/ProtectedRoute'
import { Send } from 'lucide-react'

const Notifications = () => {

  const router = useRouter();

  const newNotificationHandler = () => {
    router.push('/notifications/create-new')
  }

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Notifications' 
                commandText='Send to specific accounts' 
                // Create notifications and send them to specific accounts
                commandIcon={<Send size={16}/>} 
                onClickHandler={newNotificationHandler}/>
        {
          notifications.map((noti) => (
            <NotificationItem id={noti.id} 
                              img={noti.img} 
                              name={noti.name} 
                              text={noti.text} 
                              date={noti.date}
                              command1='Delete'
                              command2='Consent'
                              command3='Email Correspondence'/>
          ))
        }
      </div>
    </ProtectedRoute>
  )
}

export default Notifications