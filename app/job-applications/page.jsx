import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import { jobApplications } from '@/constants'
import JobsItem from '@/components/JobsItem'

const JobApplications = () => {
  return (
    <div className={`${styles.mainSection} h-full bg-black`}>
      <Title text='Job Applications'/>
      {
        <div className='flex flex-col w-full gap-3 justify-center mt-5'>
        { 
          jobApplications.map((job) => (
              <JobsItem id={job.id}
                        name={job.name}
                        city={job.city} 
                        country={job.country} 
                        description={job.description}
              />
            ))
          }
        </div> 
      }
    </div>
  )
}

export default JobApplications