import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import TaskItem from '@/components/TaskItem'
import { tasks } from '@/constants'
import ProtectedRoute from '@/components/ProtectedRoute'

const IndividualTasks = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} h-full bg-black`}>
        <Title text='Individual Tasks'/>
        <div className='flex flex-col w-full gap-3 justify-center'>
          { 
            tasks.filter((tsk) => (tsk.isIndividual)).map((task) => (
                <TaskItem id={task.id} 
                          owner={task.owner} 
                          name={task.name} 
                          date={task.date} 
                          type={task.type} 
                          icon={task.icon} 
                          city={task.city}
                          price={task.price}
                          source='individual'
                          command1='View'
                          command2='Delete' 
                          command3='Convert to be a regular task'
                />
              ))
            }
          </div> 
      </div>
    </ProtectedRoute>
  )
}

export default IndividualTasks