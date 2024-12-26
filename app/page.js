'use client'

import React from 'react'
import styles from './styles'
import LoginForm from '@/components/forms/LoginForm'

const LoginPage = () => {
  
  return (
    <div className={`${styles.mainSection} items-center justify-center h-full`}>
      {/* <Button title='login' onClickHandler={loginHandler}/> */}
      <div className='p-10 bg-blue-400 rounded-2xl flex flex-col items-center justify-center w-[95%] lg:w-[75%] mb-25'>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
// "use client"

// import React, { useState } from "react"
// import styles from './styles'
// import { PieChartComponent } from '@/components/PieChart'
// import { LinearChart } from '@/components/LinearChart'
// import Image from "next/image"
// import { reviews } from "@/constants"
// import ReviewComponent from "@/components/ReviewComponent"
// import "react-datepicker/dist/react-datepicker.css";
// import LoginModal from "@/components/LoginModal"


// const Tasks = () => {

//   return (
//     <div className={`${styles.mainSection}`}>
//       <div className="w-full flex flex-1 flex-col lg:flex-row lg:h-[370px]">
//         <div className="lg:w-[60%] lg:mr-5 lg:h-[370px] mb-2">
//           <LinearChart/>
//         </div>
//         <div className="lg:w-[40%]  lg:h-[370px] mb-2">
//           <PieChartComponent/>
//         </div>
//       </div>
     
//       <h1 className="mt-5 font-bold text-[22px]">Reviews</h1>
//       {
//         reviews.map((review) => (
//           <ReviewComponent id={review.id} img={review.img} text={review.text}/>
//         ))
//       }
//       <LoginModal/>
//     </div>
//   )
// }

// export default Tasks