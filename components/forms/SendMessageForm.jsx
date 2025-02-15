"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { FormFieldType } from "@/constants"
import Button from "../Button"
import { Captions } from "lucide-react"
import { useEffect } from "react"

const formSchema = z.object({
      subject: z.string().min(2, {
      message: "Subject must be at least 2 characters.",
    }),
  })

const SendMessageForm = ({ source, onInputChange }) => {

  const form = useForm({
    resolver: zodResolver(formSchema), 
    defaultValues: {
      subject: '',
      message: '',
    },
  });

  // Register inputs with useForm
  const { register, watch } = form;
  const subject = watch('subject');
  const message = watch('message');

  // Trigger the callback whenever subject or message changes
  useEffect(() => {
  //   console.log('Subject Watch:', subject);
  // console.log('Message Watch:', message);
    onInputChange({ subject, message });
  }, [subject, message, onInputChange]);

    const onSubmit = (data) => {
        console.log(data);
      };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full font-bold space-y-6 flex flex-1 flex-col">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="subject"
              label="Subject"
              placeholder="Enter subject..."
              iconSrc={<Captions />}
              iconAlt="subject"
              // Register input
              inputProps={register('subject')}
            />
            <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="message"
                label='Message'
                placeholder='Write your message here...'
            />
             {source !== 'modal'
              &&
              <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button styles='w-[100%]' title='Send'/>
              </div>
             }       
        </form>
    </Form>
  )
}

export default SendMessageForm