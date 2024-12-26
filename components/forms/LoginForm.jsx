"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType } from "@/constants"
import Button from "../Button"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react"
import axios from "axios"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const LoginForm = ({ setOpen }) => {

    const form = useForm();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Email:', formData.get('email'));
        console.log('Password:', formData.get('password'));
      };

    const onClickButton = (e) => {
        e.preventDefault();
        // if(email !== 'admin@mail.com'){
        //     setError('Invalid email')
        // }else if (password !== 'a123456Z'){
        //     setError('Incorrect password')
        // }else {
        //     setError('')
        //     setOpen(false)
        //     handleLogin();
        // }
        setOpen(false)
    }

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://api.max-togo.com/api/admin/login', {
              email: email,
              password: password,
            });
            console.log('Login Success:', response.data);
          } catch (error) {
            if (error.response) {
              // Response with error status
              console.error('Server Error:', error.response.data);
            } else if (error.request) {
              // No response received
              console.error('Network Error:', error.message);
            } else {
              // Error during request setup
              console.error('Error:', error.message);
            }
          }
        
      };

  return (
    //onSubmit={form.handleSubmit(onSubmit)} 
    <Form {...form}>
        <form className="font-bold space-y-6 flex flex-1 flex-col w-full mb-5">
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                id="email"
                label="Email"
                placeholder="Your email..."
                iconAlt="email"
                iconSrc={<MdEmail size={20} color='#FECC02'/>}
                type='mail'
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="password"
                id="password"
                label="Password"
                placeholder=""
                iconAlt="password"
                iconSrc={<RiLockPasswordFill size={20} color='#FECC02'/>}
                type='password'
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error !== '' && <p className="text-red">{error}</p>}
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='w-[100%] rounded-3xl text-[16px]' title='Login' onClickHandler={onClickButton}/>
            </div>
        </form>
    </Form>
  )
}

export default LoginForm