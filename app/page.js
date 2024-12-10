"use client"

import React, { useState } from "react"
import styles from './styles'
import { PieChartComponent } from '@/components/PieChart'
import { LinearChart } from '@/components/LinearChart'
import { Calendar } from "@/components/ui/calendar"
import { user } from "@/public/assets"
import Image from "next/image"
import { reviews } from "@/constants"
import ReviewComponent from "@/components/ReviewComponent"

const Tasks = () => {

  const [date, setDate] = useState(new Date())

  return (
    <div className={`${styles.mainSection}`}>
      <div className="flex flex-col w-full ">
        <div className='mb-0 lg:mb-5 lg:h-[500px] pb-5'>
          <LinearChart/>
        </div>
      
        <div className="mt-5 flex flex-col lg:flex-row w-full bg-textPrimary gap-2">
          <div className="bg-secondaryColor ">
          <PieChartComponent />
          </div>
          {/* <div className="bg-primaryColor w-[20%] sm:w-full ">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full h-full"
            />
          </div> */}
        </div>
      </div>

      <h1 className="mt-5 font-bold text-[22px]">Reviews</h1>
      {
        reviews.map((review) => (
          <ReviewComponent key={review.id} img={review.img} text={review.text}/>
        ))
      }
    </div>
  )
}

export default Tasks