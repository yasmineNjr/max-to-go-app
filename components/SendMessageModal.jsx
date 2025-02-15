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
import { Input } from './ui/input'

const SendMessageModal = ({ title, buttonText, text}) => {

    const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            {buttonText}
        </DialogTrigger>
       
        <DialogContent className='shad-dialog'>
            <DialogHeader className='mb-4 space-y-3'>
                <DialogTitle className='flex justify-center capitalize text-center text-customSecondart my-5'>
                    <h1 className='text-xl mt-5 text-primary'>{title}</h1>
                </DialogTitle>
                <DialogDescription className='text-center text-foreground gap-3 text-[18px] flex flex-col items-center justify-center'>
                    {text}
                    <div className='rounded-2xl border-border hover:border-primary border'>
                        <Input
                            placeholder='duration'
                            className="shad-input "
                            type='number'
                            min={1}
                        />
                    </div>
                    <div className='flex flex-row items-center justify-center gap-8 w-full'>
                        <Button variant='none' //disabled={loading}
                                className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-gray-500 font-bold h-[25px] text-foreground outline-none rounded-xl`}
                                onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant='none' //disabled={loading}
                                className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg font-bold h-[25px] bg-primary text-foreground outline-none rounded-xl`}
                                onClick={() => setOpen(false)}>
                            {/* {loading ? 'Processing...' : actionTxt} */}
                            Send
                        </Button>

                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default SendMessageModal