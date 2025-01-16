'use client'

import React, { useState } from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import TaskItem from '@/components/TaskItem'
import { tasks, taskStates } from '@/constants'
import MultiSelectDropdown from '@/components/MultiSelectDropdown'
import ProtectedRoute from '@/components/ProtectedRoute'

const IndividualTasks = () => {

  const [selectedStates, setSelectedStates] = useState([]);
  // const [filteredTasks, setFilteredTasks] = useState([]);
  
  // Filter tasks based on selected states
  const filteredTasks = tasks.filter(
    (task) =>
      task.isIndividual && // Keep individual tasks
      (selectedStates.length === 0 || selectedStates.includes(task.status)) // Filter by status
  );

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} h-full bg-black`}>
        <Title text='Individual Tasks'/>

        <div className="flex items-center mt-5 ">
          <MultiSelectDropdown options={taskStates} 
                                placeholder="Select task states..." 
                                // onChange={(selected) => setSelectedStates(selected)}
                                setSelectedOptions={setSelectedStates}
                                selectedOptions={selectedStates}
          />
        </div>
        <div className='flex flex-col w-full gap-3 justify-center'>
          { 
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                owner={task.owner}
                name={task.name}
                date={task.date}
                type={task.type}
                icon={task.icon}
                city={task.city}
                price={task.price}
                status={task.status}
                source="individual"
                command1="View"
                command2="Delete"
                command3="Convert to be a regular task"
              />
            ))
            }
          </div> 
      </div>
    </ProtectedRoute>
  )
}

export default IndividualTasks