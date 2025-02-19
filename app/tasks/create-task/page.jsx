import styles from '@/app/styles'
import NewTaskForm from '@/components/forms/NewTaskForm'
import ProtectedRoute from '@/components/ProtectedRoute'
import Title from '@/components/Title'
import React from 'react'

const NewTaskPage = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
          <Title text='Create a new task'/>
          <div className='w-full bg-secondary rounded-2xl flex flex-col items-center justify-center mb-25 mt-5 p-5'>
          {/* w-[95%] lg:w-[75%]  */}
              <NewTaskForm />
          </div>
      </div>
    </ProtectedRoute>
  )
}

export default NewTaskPage