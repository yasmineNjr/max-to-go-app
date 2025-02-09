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
            {buttonText}
        </DialogTrigger>
       
        <DialogContent className='shad-dialog' style={{ maxWidth: '90%', width: '400px' }}>
            <DialogHeader className='mb-4 space-y-3'>
                <DialogTitle className='flex justify-center capitalize text-center text-customSecondart my-5'>
                    <h1 className='text-xl mt-5 text-primary'>Email from {name}</h1>
                </DialogTitle>
                <DialogDescription className='text-center text-foreground gap-3 text-[18px] flex flex-col items-center justify-center mt-10'>
                    {text}
                    <div className='flex flex-row items-center justify-center gap-8 w-full'>
                        {/* <Button variant='none'
                                className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-gray-500 font-bold h-[25px] text-foreground outline-none rounded-xl`}
                                onClick={() => setOpen(false)}>
                            Cancel
                        </Button> */}
                        <Button variant='none' 
                                className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-primary font-bold h-[25px] text-foreground outline-none rounded-xl`}
                                onClick={() => setOpen(false)}>
                            OK
                        </Button>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default EmailModal