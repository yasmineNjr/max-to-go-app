'use client'

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form, FormControl } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType  } from "@/constants"
import FileUploader from '../FileUploader'
import Button from "../Button"
import { FiSend } from "react-icons/fi";

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const CreateAdvertisementForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-full my-10">
            <CustomFormField
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="advertisement"
                label="Add photo"
                renderSkeleton={(field) => (
                    <FormControl>
                      <FileUploader files={field.value} onChange={field.onChange} />
                    </FormControl>
                )}
                />
            <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="message"
                label='Note'
                placeholder='Write your message here...'
            />
                    
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='w-[50%]' title='Send' icon={<FiSend/>}/>
            </div>
        </form>
    </Form>
  )
}

export default CreateAdvertisementForm