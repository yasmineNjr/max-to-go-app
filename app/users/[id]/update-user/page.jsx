'use client'

import styles from '@/app/styles';
import UpdateUserForm from '@/components/forms/UpdateUserForm';
import ProtectedRoute from '@/components/ProtectedRoute';
import Title from '@/components/Title';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const SendMessagePage = ({ params }) => {

  const companyId = params.id;
  const searchParams = useSearchParams();
  const someProp = searchParams.get('someProp');

  const encodedData = searchParams.get('data');

  // Decode and parse the JSON string back to an object
  const userData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : null;

//   console.log(userData); 

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Update User'/>
        <UpdateUserForm user={userData}/>
      </div>
    </ProtectedRoute>
  )
}

export default SendMessagePage