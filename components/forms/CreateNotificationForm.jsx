"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType, users } from "@/constants"
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

const CreateNotificationForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-full my-10">
            <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="sendMessage"
                label="The account you want to send the message to"
                placeholder="Select a user..."
                iconSrc={<TiUserAddOutline color='#FECC02' size={24}/>}
                >
                {users.map((user) => (
                <SelectItem key={user.name} value={user.name}>
                    <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src={user.img}
                        alt={user.img}
                        width={32}
                        height={32}
                        className="rounded-full border border-textPrimary"
                    />
                    <p className="text-textPrimary">{user.name}</p>
                    </div>
                </SelectItem>
                ))} 
            </CustomFormField>
            
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

export default CreateNotificationForm