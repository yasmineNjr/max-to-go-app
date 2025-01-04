'use client'

import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import { useRouter } from 'next/navigation';
import Command from '@/components/Command';
import { FaPlus } from "react-icons/fa6";
import { advertisements } from '@/constants';
import AdComponent from '@/components/AdComponent';
import ProtectedRoute from '@/components/ProtectedRoute';

const Advertisements = () => {
  
  const router = useRouter();

  const newAdverHandler = () => {
    router.push('/advertisements/create-new')
  }

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} h-full bg-black`}>
        <Title text='Advertisement'/>
        <Command 
          icon={<FaPlus color='#FECC02'/>} 
          text='Create ads'
          onClickHandler={newAdverHandler}
        />
        <div className='flex flex-col w-full h-full gap-5 p-0'>
      { 
        advertisements.map((ad) => (
            <AdComponent id={ad.id} img={ad.img}/>
          ))
        }
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Advertisements