"use client"

import React, { useState } from "react"
import styles from './styles'
import { PieChartComponent } from '@/components/PieChart'
import { LinearChart } from '@/components/LinearChart'
import Image from "next/image"
import { reviews } from "@/constants"
import ReviewComponent from "@/components/ReviewComponent"
import "react-datepicker/dist/react-datepicker.css";


const Tasks = () => {


  return (
    <div className={`${styles.mainSection}`}>
      <div className="w-full flex flex-1 flex-col lg:flex-row lg:h-[370px]">
        <div className="lg:w-[60%] lg:mr-5 lg:h-[370px] mb-2">
          <LinearChart/>
        </div>
        <div className="lg:w-[40%]  lg:h-[370px] mb-2">
          <PieChartComponent/>
        </div>
      </div>
     
      <h1 className="mt-5 font-bold text-[22px]">Reviews</h1>
      {
        reviews.map((review) => (
          <ReviewComponent id={review.id} img={review.img} text={review.text}/>
        ))
      }
    </div>
  )
}

export default Tasks