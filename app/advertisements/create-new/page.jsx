import styles from '@/app/styles'
import CreateAdvertisementForm from '@/components/forms/CreateAdvertisementForm'
import Title from '@/components/Title'
import React from 'react'

const NewAdvertisementPage = ({ params }) => {
  return (
    <div className={`${styles.mainSection}`}>
      <Title text='+ Create new advertisement'/>
      <CreateAdvertisementForm/>
    </div>
  )
}

export default NewAdvertisementPage