import styles from '@/app/styles'
import NotificationItem from '@/components/NotificationItem'
import { notifications } from '@/constants'
import React from 'react'

const CreateNoticesPage = () => {
  return (
    <div className={`${styles.mainSection}`}>
      {
        notifications.map((noti) => (
          <NotificationItem img={noti.img} 
                            name={noti.name} 
                            text={noti.text} 
                            date={noti.date} 
                            isCommand={true}
                            command1='Delete'
                            command2='Consent'
                            command3='Email correspondance'/>
        ))
      }
    </div>
  )
}

export default CreateNoticesPage