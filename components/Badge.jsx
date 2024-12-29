'use client'

import { useAppContext } from '@/context/AppContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

const Badge = ({ icon, text, style, source, companyId, isApproval }) => {
    
  const router = useRouter();
  // const { token } = useAppContext(); // Ensure token is accessible from context
  
  const onClickHandler = () => {
    if(source === 'password')
      router.push(`/users/${user}/change-password`)
    else if(source === 'pause')
      onApproveHandler();
    else if(source === 'message')
      router.push(`/users/${user}/send-message`)
    else if(source === 'invoices')
      router.push(`/users/${user}/invoices`)
    else if(source === 'delete')
      router.push(`/users/${user}/delete`)
  }

  const onApproveHandler = async() => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage or context
      if (!token) {
        console.error('No token available');
        return;
      }
  
      const response = await axios.put('/api/approve', 
        { companyId, isApproval }, // Pass companyId and isApproval in the body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('Response from approval API:', response.data);
      return response.data; // Handle the success response
    } catch (error) {
      console.error('Error in approval API:', error.response?.data || error.message);
    }
  }

  return (
    <div 
      className={`min-w-[60px] flex justify-center text-center w-fit items-center gap-1 rounded-full px-2 py-2 ${style}`} 
      onClick={onClickHandler}
    >
        {icon}
        <p className='text-textDefault font-light'>
            {text}
        </p>
    </div>
  )
}

export default Badge