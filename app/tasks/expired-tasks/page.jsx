import styles from '@/app/styles'
import TaskItem from '@/components/TaskItem'
import Title from '@/components/Title'
import { tasks } from '@/constants'
import React from 'react'

const ExpiredTasksPage = () => {
  return (
    <div className={`${styles.mainSection} h-full bg-black`}>
    <Title text='Expired Tasks'/>
    <div className='flex flex-col w-full gap-3 justify-center'>
      { 
        tasks.filter((tsk) => (tsk.status === 'expired')).map((task) => (
            <TaskItem id={task.id} 
                      owner={task.owner} 
                      name={task.name} 
                      date={task.date} 
                      type={task.type} 
                      icon={task.icon} 
                      city={task.city}
                      price={task.price}
                      source='expired'
                      command1='Delete'
                      command2='Chat'
                      command3='Cancel Expiry'
            />
          ))
        }
      </div> 
  </div>
  )
}

export default ExpiredTasksPage