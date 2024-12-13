import styles from '@/app/styles'
import CreateNotificationForm from '@/components/forms/CreateNotificationForm'
import Title from '@/components/Title'
import React from 'react'

const SendGroupPage = ({ params }) => {
  return (
    <div className={`${styles.mainSection}`}>
        <Title text='Send a group message'/>
        <CreateNotificationForm/>
    </div>
  )
}

export default SendGroupPage