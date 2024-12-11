'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType } from "@/constants"
import Button from "../Button"
import ConfirmationModal from "../ConfirmationModal"


const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const NewInvoiceForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-[75%] mb-5">
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="user"
                label="Username"
                placeholder=""
                iconAlt="user"
            />
            
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="price"
                label="Price"
                placeholder=""
                iconAlt="price"
            />

            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="quantity"
                label="Quantity"
                placeholder=""
                iconAlt="quantity"
            />
            
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="total"
                label="Total"
                placeholder=""
                iconAlt="total"
            />
                    
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                {/* <Button styles='w-[100%] rounded-3xl' title='Create'/> */}
                <ConfirmationModal buttonText='Create' text='Your invoice has been created successfully'/>
            </div>
        </form>
    </Form>
  )
}

export default NewInvoiceForm