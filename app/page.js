'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import styles from './styles'
// import LoginForm from '@/components/forms/LoginForm'
const LoginForm = dynamic( 
  () => import('@/components/forms/LoginForm'),
  {
    loadingTable: () => <p className='text-secondaryColor'>Loading...</p>
  })
import { logo } from '@/public/assets'
import { useRouter } from 'next/navigation'

const LoginPage = () => {

  // const { token } = useAppContext();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true); // State to handle loading/checking
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage
      if (token) {
        // If token exists, redirect programmatically
        router.replace('/main');
        return;
      }
      setIsChecking(false); // Allow the login form to be shown if no token
    };

    checkToken();
  }, [router]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-2 border-secondaryColor border-t-transparent rounded-full animate-spin"></div>
      </div>
    ); // Show a loading spinner while checking the token
  }

  // if (token) {
  //   // Redirect programmatically without rendering unnecessary HTML
  //   router.replace('/main');
  //   return null; // Prevent rendering anything while redirecting
  // }
  
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