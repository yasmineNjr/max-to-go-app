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

const DeleteModal = ({ buttonTxt, text, icon, style, companyId}) => {

    // const { token } = useAppContext(); // Ensure token is accessible from context
    const [open, setOpen] = useState(false)


    const onDeleteHandler = async () => {
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
          return response.data; // Handle success response
        } catch (error) {
          console.error('Error deleting company:', error.response?.data || error.message);
        }
      };      
   
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
                    <Button variant='none' 
                            className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-secondaryColor font-bold h-[25px] text-primaryColor outline-none rounded-xl`}
                            onClick={onDeleteHandler}>
                        OK
                    </Button>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default DeleteModal