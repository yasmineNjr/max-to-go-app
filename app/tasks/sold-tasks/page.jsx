import styles from '@/app/styles'
import ProtectedRoute from '@/components/ProtectedRoute'
import TaskItem from '@/components/TaskItem'
import Title from '@/components/Title'
import { tasks } from '@/constants'
import React from 'react'

const ToBeSoldTasksPage = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Tasks to be sold'/>
        <div className='flex flex-col w-full gap-3 justify-center'>
          { 
            tasks.filter((tsk) => (tsk.status === 'sold')).map((task) => (
                <TaskItem id={task.id} 
                          owner={task.owner} 
                          name={task.name} 
                          date={task.date} 
                          type={task.type} 
                          icon={task.icon} 
                          city={task.city}
                          price={task.price}
                          source='sold'
                          command1='Freeze'
                          command2='End'
                          command3='Delete'
                          command4='Update'
                          command5='Chat'
                          command6='Cancel'
                />
              ))
            }
          </div> 
      </div>
    </ProtectedRoute>
  )
}

export default ToBeSoldTasksPage