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
import { Input } from './ui/input'
import ChangePasswordForm from './forms/ChangePasswordForm'
import LoginForm from './forms/LoginForm'

const LoginModal = ({ form, text }) => {

    const [open, setOpen] = useState(true)
  return (
    <Dialog open={open} >
        <DialogTrigger asChild>
        </DialogTrigger>
       
        <DialogContent className='shad-dialog'>
            <DialogHeader className='mb-4 space-y-3'>
                <DialogTitle className='capitalize text-center text-customSecondart '>
                    <Image src={logo} alt='logo' width={250} height={250} className='ml-5'/>
                </DialogTitle>
                <DialogDescription className=' text-textDefault gap-3 flex flex-col items-center justify-center'>
                   <LoginForm setOpen={setOpen}/>
                    {/* <Button variant='none' 
                            className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-secondaryColor font-bold h-[25px] text-primaryColor outline-none rounded-xl`}
                            onClick={() => setOpen(false)}>
                        OK
                    </Button> */}
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default LoginModal