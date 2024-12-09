"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType } from "@/constants"
import Button from "../Button"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const SendMessageForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col  w-[75%] mb-5">
           
            <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="message"
                label='Message'
                placeholder='Write your message here...'
            />
                    
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='w-[100%]' title='Send'/>
            </div>
        </form>
    </Form>
  )
}

export default SendMessageForm