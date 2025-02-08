'use client'

import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import { useRouter } from 'next/navigation';
import { advertisements } from '@/constants';
import AdComponent from '@/components/AdComponent';
import ProtectedRoute from '@/components/ProtectedRoute';
import { CirclePlus } from 'lucide-react';

const Advertisements = () => {
  
  const router = useRouter();

  const newAdverHandler = () => {
    router.push('/advertisements/create-new')
  }

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} h-full`}>
        <Title text='Advertisement' commandText='Create ads' commandIcon={<CirclePlus />} onClickHandler={newAdverHandler}/>
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