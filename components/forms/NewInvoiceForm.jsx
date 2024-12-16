'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType } from "@/constants"
import ConfirmationModal from "../ConfirmationModal"
import { FaRegUser } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineNumbers } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { useState } from "react"

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
    const [value, setValue] = useState("");
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
    
        // Allow only numbers and one decimal point
        if (/^\d*\.?\d*$/.test(inputValue)) {
          setValue(inputValue);
        }
      };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-[75%] mb-5">
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="user"
                label="Username"
                placeholder="Enter username"
                iconSrc={<FaRegUser color="#FECC02"/>}
                iconAlt="user"
            />
            
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="price"
                label="Price"
                placeholder="Enter price"
                iconSrc={<HiCurrencyDollar color="#FECC02"/>}
                iconAlt="price"
                onChange={handleInputChange}
                value={value}
            />

            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="quantity"
                label="Quantity"
                placeholder="1"
                iconAlt="quantity"
                iconSrc={<MdOutlineNumbers color="#FECC02"/>}
                type='number'
                min={1}
            />
            
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="total"
                label="Total"
                placeholder="0"
                iconAlt="total"
                iconSrc={<FaSackDollar color="#FECC02"/>}
                readOnly={true}
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