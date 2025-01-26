"use client"

// import { PieChartComponent } from '@/components/PieChart'
const PieChartComponent = dynamic(() =>
  import("@/components/PieChart").then((mod) => mod.PieChartComponent)
);
import { LinearChart } from '@/components/LinearChart'
// const LinearChart = dynamic(() =>
//   import("@/components/PieChart").then((mod) => mod.LinearChart)
// );

import { reviews } from "@/constants"
// import ReviewComponent from "@/components/ReviewComponent"
const ReviewComponent = dynamic( 
  () => import('@/components/ReviewComponent'),
  {
    loadingTable: () => <p className='text-secondaryColor'>Loading...</p>
  })
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles"
import dynamic from "next/dynamic";
import ProtectedRoute from '@/components/ProtectedRoute'


const Tasks = () => {

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <div className="w-full flex flex-1 flex-col lg:flex-row lg:h-[370px]">
          <div className="lg:w-[60%] lg:mr-5 lg:h-[370px] mb-2">
            <LinearChart/>
          </div>
          <div className="lg:w-[40%]  lg:h-[370px] mb-2">
            <PieChartComponent/>
          </div>
        </div>
      
        <h1 className="mt-5 font-bold text-[22px] text-foreground">Reviews</h1>
        {
          reviews.map((review) => (
            <ReviewComponent id={review.id} img={review.img} text={review.text}/>
          ))
        }
      </div>
    </ProtectedRoute>
  )
}

export default Tasks