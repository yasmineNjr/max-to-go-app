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
import { Button } from './ui/button'

const ChangePasswordModal = ({ buttonTxt, icon, style, user}) => {

    const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {/* <Button variant='ghost'> */}
            {buttonTxt}
          {/* </Button> */}
        </DialogTrigger>
       
        <DialogContent className='shad-dialog'>
            <DialogHeader className='mb-4 space-y-3 w-full'>
                <DialogDescription className=' text-foreground gap-3 text-[18px] flex flex-col items-center justify-center w-full'>
                    <UserActionComponent title='Reset Password' form={<ChangePasswordForm setOpen={setOpen} user={user}/>}/>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default ChangePasswordModal