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
import SendMessageForm from './forms/SendMessageForm'

const SendMessageModal = ({ title, buttonTxt, actionTxt, selectedUsers }) => {

    // const form = useForm();
    const [open, setOpen] = useState(false)
    // const [loading, setLoading] = useState(false); // State to track loading
    const [formData, setFormData] = useState({ subject: '', message: '' });

    const handleSendEmail = () => {
        const emails = selectedUsers.map(row => row.email); 
        const mailtoLink = `mailto:${emails.join(",")}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
        // window.location.href = mailtoLink;
        console.log(formData)
      };
   
  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            {buttonTxt}
        </DialogTrigger>
       
        <DialogContent className='shad-dialog' style={{ maxWidth: '90%', width: '400px' }}>
            <DialogHeader className='w-full mb-4 space-y-3'>
                <DialogTitle className='flex justify-center capitalize text-center text-customSecondart my-5'>
                  <h1 className='text-xl mt-5 text-primary'>{title}</h1>
                </DialogTitle>
                <DialogDescription className='w-full text-center text-foreground gap-3 text-lg font-light flex flex-col items-center justify-center'>
                    <SendMessageForm source='modal' onInputChange={setFormData}/>
                    <div className='flex flex-row items-center justify-center gap-8 w-full'>
                      <Button variant='none' 
                              className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-gray-500 font-bold h-[25px] text-foreground outline-none rounded-xl border-border`}
                              onClick={() => setOpen(false)}>
                          Cancel
                      </Button>
                      <Button variant='none' 
                              className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg font-bold h-[25px] bg-primary text-foreground outline-none rounded-xl`}
                              onClick={handleSendEmail}>
                          {actionTxt}
                      </Button>

                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default SendMessageModal