'use client'

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from './ui/button'
import Image from 'next/image'
import { logo } from '@/public/assets'
import { useAppContext } from '@/context/AppContext'
import axios from 'axios'

const DeleteModal = ({ buttonTxt, text, icon, style, companyId, onSuccess, source, isApproval }) => {

    // const { token } = useAppContext(); // Ensure token is accessible from context
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false); // State to track loading

    const onDeleteHandler = async () => {
      setLoading(true); // Start loading
        try {
          const token = localStorage.getItem('token'); // Retrieve token from localStorage or context
          if (!token) {
            console.error('No token available');
            return;
          }
      
          const response = await axios.delete('/api/delete', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
                companyId, // Pass companyId as a query parameter
            },
          });
      
          console.log('Company deleted successfully:', response.data);
          setOpen(false);
          onSuccess(); // Trigger data reload
          return response.data; // Handle success response
        } catch (error) {
          console.error('Error deleting company:', error.response?.data || error.message);
        }finally {
          setLoading(false); // End loading
        }
      };   
      
    const onApproveHandler = async() => {
      setLoading(true); // Start loading
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
        onSuccess(); // Trigger data reload
        return response.data; // Handle the success response
      } catch (error) {
        console.error('Error in approval API:', error.response?.data || error.message);
      }finally {
        setLoading(false); // End loading
      }
    }
   
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !loading && setOpen(isOpen)}>
        <DialogTrigger asChild>
            <div 
            className={`min-w-[60px] flex justify-center text-center w-fit items-center gap-1 rounded-full px-2 py-2 ${style}`} 
            >
                {icon}
                <p className='text-textDefault font-light'>
                    {buttonTxt}
                </p>
            </div>
        </DialogTrigger>
       
        <DialogContent className='shad-dialog'>
            <DialogHeader className='mb-4 space-y-3'>
                <DialogTitle className='capitalize text-center text-customSecondart'>
                    <Image src={logo} alt='logo' width={250} height={250} className='ml-10'/>
                </DialogTitle>
                <DialogDescription className='text-center text-textDefault gap-3 text-[18px] flex flex-col items-center justify-center'>
                    {text}
                    <Button variant='none' disabled={loading}
                            className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-secondaryColor font-bold h-[25px] text-primaryColor outline-none rounded-xl`}
                            onClick={source === 'delete' ? onDeleteHandler : onApproveHandler}>
                        {loading ? 'Processing...' : 'OK'}
                    </Button>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default DeleteModal