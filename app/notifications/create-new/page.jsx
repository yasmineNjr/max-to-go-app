import styles from '@/app/styles'
import CreateNotificationForm from '@/components/forms/CreateNotificationForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import Title from '@/components/Title'
import React from 'react'

const CreateNewPage = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Create notifications and send them to specific accounts'/>
        <CreateNotificationForm/>
      </div>
    </ProtectedRoute>
  )
}

export default CreateNewPage