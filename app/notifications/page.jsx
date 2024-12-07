import Command from '@/components/Command'
import Title from '@/components/Title'
import React from 'react'
import styles from '../styles'
import { FaPlus } from "react-icons/fa6";
import { getNotificationsData } from '@/constants';
import Image from 'next/image';
import NotificationItem from '@/components/NotificationItem';

const Notifications = async() => {

  const notifications = await getNotificationsData();
  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Notifications'/>
      <Command icon={<FaPlus color='#FECC02'/>} text='Create notifications and send them to specific accounts'/>
      {
        notifications.map((noti) => (
          <NotificationItem img={noti.img} name={noti.name} text={noti.text} date={noti.date}/>
        ))
      }
    </div>
  )
}

export default Notifications