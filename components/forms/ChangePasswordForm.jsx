"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType } from "@/constants"
// import Button from "../Button"
import { useState } from "react"
import { Lock } from "lucide-react"
import { Button } from "../ui/button"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const ChangePasswordForm = ({ setOpen, user }) => {

    const form = useForm();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const onSubmit = (data) => {
        console.log('data');
        setOpen(false);
      };

      
    const resetPasswordHandler = async () => {
        
        //validation 
        ////////////
        const resetToken = 'your-reset-token'; // Replace with the actual reset token
      
        try {
          const data = await sendPasswordResetCodeAsync(user, resetToken, confirm);
          console.log('Password reset successfully:', data);
        } catch (error) {
          console.error('Error resetting password:', error.message);
        }
      };
      
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-full ">
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="password"
                label="New Password"
                placeholder=""
                iconAlt="password"
                iconSrc={<Lock size={20}/>}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="confirm"
                label="Confirm New Password"
                placeholder=""
                iconAlt="confirm"
                iconSrc={<Lock size={20}/>}
                type='password'
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
            />
                    
            <div className="flex flex-1 flex-row gap-8 justify-center items-center w-full mt-10 w-full">
                <Button styles='w-[100%] rounded-3xl bg-primary' onClickHandler={resetPasswordHandler}>Reset</Button>
                <Button styles='w-[100%] rounded-3xl bg-gray-500' onClickHandler={() => setOpen(false)}>Cancel</Button>
            </div>
        </form>
    </Form>
  )
}

export default ChangePasswordForm