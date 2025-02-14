'use client'

import React, { useState } from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import TaskItem from '@/components/TaskItem'
import { tasks, taskStates } from '@/constants'
import MultiSelectDropdown from '@/components/MultiSelectDropdown'
import ProtectedRoute from '@/components/ProtectedRoute'
import { GrPowerReset } from "react-icons/gr";
import { RotateCcw, RotateCcwSquare, ScanEye, Trash2, UserRoundPlus } from 'lucide-react'

const IndividualTasks = () => {

  const [selectedStates, setSelectedStates] = useState([]);
  
  // Filter tasks based on selected states
  // const filteredTasks = tasks.filter(
  //   (task) =>
  //     task.isIndividual && // Keep individual tasks
  //     (selectedStates.length === 0 || selectedStates.includes(task.status)) // Filter by status
  // );
  const filteredTasks = tasks.filter(
    (task) =>
      task.isIndividual && // Keep individual tasks
      (selectedStates.length === 0 || selectedStates.some((opt) => opt.value === task.status)) // Match `task.status` with `value` in `selectedOptions`
  );
  const commands = [
    { icon: <ScanEye size={16}/> , tooltip:'View', onClickHandler: () => console.log('View')  },
    { icon: <RotateCcwSquare size={16}/> , tooltip:'Convert to be a regular task', onClickHandler: () => console.log('Convert to be a regular task')  },
    { icon: <Trash2 size={16}/> , tooltip:'Delete', onClickHandler: () => console.log('Delete')  },
  ]
 
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} `}>
        <Title text='Private orders'/>

        <div 
          // className="flex flex-row items-center mt-5 border border-primary rounded-xl mb-5"
          className="shad-select group focus-within:!border-primary transition-colors duration-300 my-5"
        >
          <MultiSelectDropdown options={taskStates} 
                                placeholder="Select task states..." 
                                // onChange={(selected) => setSelectedStates(selected)}
                                setSelectedOptions={setSelectedStates}
                                selectedOptions={selectedStates}
                                style='text-muted-foreground group-focus-within:text-primary transition-colors duration-300'
          />
          <div 
                // className='m-2 cursor-pointer' 
                className="m-2 text-muted-foreground group-focus-within:text-primary transition-colors duration-300"
                onClick={() => setSelectedStates([])}>
            <RotateCcw size={22} className='hover:text-primary'/>
          </div>
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
                commands={commands}
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