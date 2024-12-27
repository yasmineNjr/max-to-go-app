'use client'

import React, { useEffect, useState } from 'react'
import styles from './styles'
import LoginForm from '@/components/forms/LoginForm'
import Image from 'next/image'
import { logo } from '@/public/assets'
import { useAppContext } from '@/context/AppContext'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

  const { token } = useAppContext();
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (token) {
  //     // If the token exists, redirect to the dashboard
  //     router.replace('/main');
  //   } else {
  //     // If there's no token, stop the loading state
  //     setIsLoading(false);
  //   }
  // }, [token, router]);

  // if (isLoading) {
  //   // Show a blank screen or loading spinner while checking the token
  //   <div className='text-white'>Loading...</div>
  //   return null;
  // }

  
  // useEffect(() => {
  //   if (token) {
  //     // Redirect to the dashboard if the user is logged in
  //     router.push('/main'); // Adjust to your logged-in landing page
  //   }
  // }, [token, router]);

  if (token) {
    // Redirect programmatically without rendering unnecessary HTML
    router.replace('/main');
    return null; // Prevent rendering anything while redirecting
  }
  
  return (
    <div className={`${styles.mainSection} items-center justify-center h-full mt-15`}>
      <div className='bg-black text-black h-[100px] sm:h-fit '>xxxx</div>
      <div className='p-5 md:p-10 bg-blue-400 rounded-2xl flex flex-col items-center justify-center w-[100%] lg:w-[50%] mb-25'>
        <Image src={logo} alt='logo' width={250} height={250} className='ml-5'/>
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