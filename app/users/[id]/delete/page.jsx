import styles from '@/app/styles'
import UserActionComponent from '@/components/UserActionComponent'
import React from 'react'

const DeleteUserPage = ({ params }) => {
  return (
    <div className={`${styles.mainSection} items-center justify-center`}>
        <UserActionComponent title='Are you sure you want to delete the user' />
    </div>
  )
}

export default DeleteUserPage