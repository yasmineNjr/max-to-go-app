import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import TaskItem from '@/components/TaskItem'
import { tasks } from '@/constants'

const IndividualTasks = () => {
  return (
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
              />
            ))
          }
        </div> 
    </div>
  )
}

export default IndividualTasks