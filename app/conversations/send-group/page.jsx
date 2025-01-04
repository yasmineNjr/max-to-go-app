import styles from '@/app/styles'
import CreateNotificationForm from '@/components/forms/CreateNotificationForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import Title from '@/components/Title'
import React from 'react'

const SendGroupPage = ({ params }) => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
          <Title text='Send a group message'/>
          <CreateNotificationForm/>
      </div>
    </ProtectedRoute>
  )
}

export default SendGroupPage