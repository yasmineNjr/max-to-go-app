import styles from '@/app/styles'
import CreateNotificationForm from '@/components/forms/CreateNotificationForm'
import Title from '@/components/Title'
import React from 'react'

const CreateNewPage = () => {
  return (
    <div className={`${styles.mainSection}`}>
      <Title text='+ Create notifications and send them to specific accounts'/>
      <CreateNotificationForm/>
    </div>
  )
}

export default CreateNewPage