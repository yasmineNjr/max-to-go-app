import styles from '@/app/styles'
import ProtectedRoute from '@/components/ProtectedRoute'
import TaskItem from '@/components/TaskItem'
import Title from '@/components/Title'
import { tasks } from '@/constants'
import React from 'react'

const UnSoldTasksPage = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} h-full bg-black`}>
        <Title text='Unsold Tasks'/>
        <div className='flex flex-col w-full gap-3 justify-center'>
          { 
            tasks.filter((tsk) => (tsk.status === 'unsold')).map((task) => (
                <TaskItem id={task.id} 
                          owner={task.owner} 
                          name={task.name} 
                          date={task.date} 
                          type={task.type} 
                          icon={task.icon} 
                          city={task.city}
                          price={task.price}
                          source='unsold'
                          command1='Buy'
                          command2='Delete'
                          command3='Chat'
                          command4='Update'
                />
              ))
            }
          </div> 
      </div>
    </ProtectedRoute>
  )
}

export default UnSoldTasksPage