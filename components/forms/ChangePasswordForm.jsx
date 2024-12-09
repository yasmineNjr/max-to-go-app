"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType, notifications, users } from "@/constants"
import { TiUserAddOutline } from "react-icons/ti";
import { SelectItem } from "../ui/select"
import Image from "next/image"
import Button from "../Button"
import { FiSend } from "react-icons/fi";

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const ChangePasswordForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-[75%] mb-5">
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="password"
                label="New Password"
                placeholder=""
                iconAlt="password"
            />
            
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="confirm"
                label="Confirm New Password"
                placeholder=""
                iconAlt="confirm"
            />
                    
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='w-[100%] rounded-3xl' title='Change'/>
            </div>
        </form>
    </Form>
  )
}

export default ChangePasswordForm