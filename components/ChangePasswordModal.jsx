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
import UserActionComponent from './UserActionComponent'
import ChangePasswordForm from './forms/ChangePasswordForm'

const ChangePasswordModal = ({ buttonTxt, icon, style, user}) => {

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
            <DialogHeader className='mb-4 space-y-3 w-full'>
                <DialogDescription className=' text-textDefault gap-3 text-[18px] flex flex-col items-center justify-center w-full'>
                    <UserActionComponent form={<ChangePasswordForm setOpen={setOpen} user={user}/>}/>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default ChangePasswordModal