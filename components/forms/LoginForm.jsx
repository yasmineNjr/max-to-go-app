"use client"
 
import { useState } from "react"
import axios from "axios"
import dynamic from "next/dynamic"
import { useRouter } from 'next/navigation'
import { useAppContext } from "@/context/AppContext"
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import validator from "validator";
// import { Form } from "@/components/ui/form"
const Form = dynamic(() =>
  import("@/components/ui/form").then((mod) => mod.Form)
);
// import CustomFormField from "../CustomFormField"
const CustomFormField = dynamic( 
  () => import('../CustomFormField'),
  {
    loadingTable: () => <p className='text-primary'>Loading...</p>
  })
// import Button from "../Button"
const Button = dynamic( 
  () => import('../Button'),
  {
    loadingTable: () => <p className='text-primary'>Loading...</p>
  })

import { FormFieldType } from "@/constants"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Lock, Mail } from "lucide-react"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const LoginForm = () => {

    const router = useRouter();
    const form = useForm();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('');
    const [style, setStyle] = useState('text-[#003553]');
    const [loading, setLoading] = useState(false);
    const { setToken, setUser } = useAppContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Email:', formData.get('email'));
        console.log('Password:', formData.get('password'));
      };

    const onClickButton = (e) => {
        e.preventDefault();
        //admin@domain.com
        //Aa@112233!
        
        if(email === ''){
          setResult('Fill in email.')
          setStyle('text-red')
        }  else if(!validator.isEmail(email)){
          setResult('Invalid email format.')
          setStyle('text-red')
        }else {
            setResult('')
            handleLoginProxy();
        }
    }
    
    const handleLoginProxy = async () => {
      setLoading(true);
      try {
        const response = await axios.post('/api/login', {
          email,
          password,
        }, { cache: 'no-store' });
  
        console.log('Login Response:', response.data.data.token);
        setToken(response.data.data.token)
        localStorage.setItem('token', response.data.data.token);
        setResult('Login successful!');
        setStyle('text-green')
        router.push('/main');
      } catch (error) {
        console.error('Login Error:', error.response?.data || error.message);
        if(error.response?.data.message === 'Company not found.')
          setResult('Email not found.');
        else if(error.response?.data.message === 'Invalid password.')
          setResult('Invalid password.');
        else if(error.response?.data.message === 'An error occurred')
          setResult('Fill in password.');
        //setResult('Login failed. Try again.');
        setStyle('text-red')
      } finally {
        setLoading(false); // Hide spinner
      }
    }

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
                // iconSrc={<MdEmail size={20} color='#FECC02'/>}
                iconSrc={<Mail size={20} className="text-primary" />}
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
                placeholder="Your password..."
                iconAlt="password"
                // iconSrc={<RiLockPasswordFill size={20} color='#FECC02'/>}
                iconSrc={<Lock size={20} className="text-primary"/>}
                type='password'
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {loading ? (
              // Spinner
              <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <p className={`${style} font-light`}>{result}</p>
            )}
            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='w-[100%] rounded-3xl text-[16px]' title='Login' onClickHandler={onClickButton}/>
            </div>
        </form>
    </Form>
  )
}

export default LoginForm