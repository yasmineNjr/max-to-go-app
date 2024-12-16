import styles from '@/app/styles'
import TaskItem from '@/components/TaskItem'
import Title from '@/components/Title'
import { tasks } from '@/constants'
import React from 'react'

const ComfirmTasksPage = () => {
  return (
    <div className={`${styles.mainSection} h-full bg-black`}>
    <Title text='Tasks to be confirm'/>
    <div className='flex flex-col w-full gap-3 justify-center'>
      { 
        tasks.filter((tsk) => (tsk.status === 'confirm')).map((task) => (
            <TaskItem id={task.id} 
                      owner={task.owner} 
                      name={task.name} 
                      date={task.date} 
                      type={task.type} 
                      icon={task.icon} 
                      city={task.city}
                      price={task.price}
                      source='confirm'
                      command1='Update'
                      command2='Chat'
                      command3='Termination request denied'
                      command4='Confirm'
                      command5='Delete'
            />
          ))
        }
      </div> 
  </div>
  )
}

export default ComfirmTasksPage