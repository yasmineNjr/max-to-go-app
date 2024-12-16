import styles from '@/app/styles'
import TaskItem from '@/components/TaskItem'
import Title from '@/components/Title'
import { tasks } from '@/constants'
import React from 'react'

const UrgentTasksPage = () => {
  return (
    <div className={`${styles.mainSection} h-full bg-black`}>
    <Title text='Urgent Tasks'/>
    <div className='flex flex-col w-full gap-3 justify-center'>
      { 
        tasks.filter((tsk) => (tsk.status === 'urgent')).map((task) => (
            <TaskItem id={task.id} 
                      owner={task.owner} 
                      name={task.name} 
                      date={task.date} 
                      type={task.type} 
                      icon={task.icon} 
                      city={task.city}
                      price={task.price}
                      source='urgent'
                      command1='Delete'
                      command2='Update'
                      command3='Chat'
                      command4='Send notification to everyone'
            />
          ))
        }
      </div> 
  </div>
  )
}

export default UrgentTasksPage