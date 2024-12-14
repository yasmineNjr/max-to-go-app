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
import { MdOutlineEmail } from "react-icons/md";
import { Input } from './ui/input'

const EmailModal = ({ buttonText, name, text}) => {

    const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
        <Button variant='none' className={`flex flex-row items-center justify-center gap-2 py-4 px-6 h-[25px] w-fit font-bold text-[14px] text-secondaryColor border border-secondaryColor outline-none rounded-xl `}>
            {buttonText}
        </Button>
        </DialogTrigger>
       
        <DialogContent className='shad-dialog'>
            <DialogHeader className='mb-4 space-y-3'>
                <DialogTitle className='capitalize text-center text-textDefault flex flex-row gap-2 items-center justify-center mb-5'>
                    <MdOutlineEmail color='#FECC02' size={32}/>
                    {name}
                </DialogTitle>
                <DialogDescription className='text-center text-textDefault gap-3 text-[18px] flex flex-col items-center justify-center mt-10'>
                    {text}
                    <Button variant='none' 
                            className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-secondaryColor font-bold h-[25px] text-primaryColor outline-none rounded-xl`}
                            onClick={() => setOpen(false)}>
                        OK
                    </Button>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default EmailModal