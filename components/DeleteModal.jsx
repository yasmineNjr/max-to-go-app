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
import axios from 'axios'

const DeleteModal = ({ title, buttonTxt, actionTxt, text, icon, style, companyId, onSuccess, source, isApproval }) => {

    // const { token } = useAppContext(); // Ensure token is accessible from context
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false); // State to track loading

    const onDeleteHandler = async () => {
      if(source === 'deleteUser' ){
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
        }else{
          setOpen(false)
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
            {/* <Button variant='ghost'> */}
              {buttonTxt}
            {/* </Button> */}
        </DialogTrigger>
       
        <DialogContent className='shad-dialog' style={{ maxWidth: '90%', width: '400px' }}>
            <DialogHeader className='mb-4 space-y-3'>
                <DialogTitle className='flex justify-center capitalize text-center text-customSecondart my-5'>
                  <h1 className='text-xl mt-5 text-primary'>{title}</h1>
                </DialogTitle>
                <DialogDescription className='text-center text-foreground gap-3 text-lg font-light flex flex-col items-center justify-center'>
                    {text}
                    <div className='flex flex-row items-center justify-center gap-8 w-full'>
                     
                      <Button variant='none' disabled={loading}
                              className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg-gray-500 font-bold h-[25px] text-foreground outline-none rounded-xl`}
                              onClick={() => setOpen(false)}>
                          Cancel
                      </Button>
                      <Button variant='none' disabled={loading}
                              className={`mt-5 w-[50%] flex flex-row items-center justify-center gap-2 py-4 px-6 bg font-bold h-[25px] ${source.includes('delete') ? 'bg-destructive' : 'bg-primary'} text-foreground outline-none rounded-xl`}
                              onClick={source.includes('delete') ? onDeleteHandler : onApproveHandler}>
                          {loading ? 'Processing...' : actionTxt}
                      </Button>

                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  )
}

export default DeleteModal