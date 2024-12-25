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
import axios from 'axios'

const DeleteModal = ({ buttonTxt, text, icon, style, user}) => {

    const onDeleteHandler = async (companyId) => {
        setOpen(false)
        try {
            const response = await axios.delete(`https://api.max-togo.com/api/admin/deletecompany`, {
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY_OR_TOKEN', // Replace with actual token if needed
            },
            params: {
                companyId: user, //???? Pass companyId as query parameter
            },
            });
    
            console.log('Company deleted successfully:', response.data); // Handle the API response
        } catch (error) {
            console.error('Error deleting company:', error.message);
        }
    }

    const [open, setOpen] = useState(false)
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
                            onClick={() => onDeleteHandler(user)}>
                        OK
                    </Button>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default DeleteModal