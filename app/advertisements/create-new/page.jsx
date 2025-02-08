import styles from '@/app/styles'
import CreateAdvertisementForm from '@/components/forms/CreateAdvertisementForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import Title from '@/components/Title'
import React from 'react'

const NewAdvertisementPage = ({ params }) => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Create new advertisement'/>
        <CreateAdvertisementForm/>
      </div>
    </ProtectedRoute>
  )
}

export default NewAdvertisementPage