import styles from '@/app/styles'
import UpdateUserForm from '@/components/forms/UpdateUserForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import Title from '@/components/Title'
import React from 'react'

const CreateUserPage = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Create A New User' />
        <UpdateUserForm/>
      </div>
    </ProtectedRoute>
  )
}

export default CreateUserPage