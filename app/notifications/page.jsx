'use client'

import Command from '@/components/Command'
import Title from '@/components/Title'
import React from 'react'
import styles from '../styles'
import { FaPlus } from "react-icons/fa6";
import { getNotificationsData, notifications } from '@/constants';
import NotificationItem from '@/components/NotificationItem';
import { useRouter } from 'next/navigation';

const Notifications = () => {

  const router = useRouter();

  const newNotificationHandler = () => {
    router.push('/notifications/create-new')
  }

  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Notifications'/>
      <Command 
        icon={<FaPlus color='#FECC02'/>} 
        text='Create notifications and send them to specific accounts'
        onClickHandler={newNotificationHandler}
      />
      {
        notifications.map((noti) => (
          <NotificationItem img={noti.img} name={noti.name} text={noti.text} date={noti.date}/>
        ))
      }
    </div>
  )
}

export default Notifications