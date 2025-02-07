import styles from '@/app/styles'
import NotificationItem from '@/components/NotificationItem'
import ProtectedRoute from '@/components/ProtectedRoute'
import Title from '@/components/Title'
import { notifications } from '@/constants'
import React from 'react'

const CreateNoticesPage = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Account creation notifications' />
        <div className='mt-6'>
        {
          notifications.map((noti) => (
            <NotificationItem key={noti.id}
                              img={noti.img} 
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
      </div>
    </ProtectedRoute>
  )
}

export default CreateNoticesPage