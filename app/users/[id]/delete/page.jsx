import styles from '@/app/styles'
import ProtectedRoute from '@/components/ProtectedRoute'
import UserActionComponent from '@/components/UserActionComponent'
import React from 'react'

const DeleteUserPage = ({ params }) => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} items-center justify-center`}>
        <UserActionComponent title='Are you sure you want to delete the user' />
      </div>
    </ProtectedRoute>
  )
}

export default DeleteUserPage