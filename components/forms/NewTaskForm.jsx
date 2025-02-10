'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { apartments, FormFieldType, types } from "@/constants"
import { SelectItem } from "../ui/select"
import "react-datepicker/dist/react-datepicker.css";
import {  Building, CalendarDays, ClipboardCheck, TypeOutline } from "lucide-react"
import { Button } from "../ui/button"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const NewTaskForm = () => {

    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="font-bold space-y-6 flex flex-1 flex-col w-full p-0 mb-5">
            <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="taskType"
                label="Task type"
                placeholder="Select a type..."
                // iconSrc={<LuFileType className="text-primary" size={20}/>}
                iconSrc={<TypeOutline className="text-primary" size={20}/>}
                >
                {types.map((type) => (
                <SelectItem key={type.id} value={type.title}>
                    <div className="flex items-center gap-2 cursor-pointer">
                     <p className="text-foreground">{type.title}</p>
                    </div>
                </SelectItem>
                ))} 
            </CustomFormField>

            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                label="Task name"
                placeholder="Enter task name..."
                // iconSrc={<SiTask className="text-primary" size={20}/>}
                iconSrc={<ClipboardCheck className="text-primary" size={20}/>}
                iconAlt="task"
            />
            
            <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="address"
                label='Address of the apartment that needs cleaning'
                placeholder='Write the address here...'
            />

            <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="apartmentType"
                label="Apartment type"
                placeholder="Select the apartment type..."
                // iconSrc={<PiBuildingApartmentFill className="text-primary" size={20}/>}<Building />
                iconSrc={<Building className="text-primary" size={20}/>}
                >
                {apartments.map((apartment) => (
                <SelectItem key={apartment.id} value={apartment.title}>
                    <div className="flex items-center gap-2 cursor-pointer">
                     <p className="text-foreground">{apartment.title}</p>
                    </div>
                </SelectItem>
                ))} 
            </CustomFormField>

            <CustomFormField
                fieldType={FormFieldType.CHECKBOX}
                control={form.control}
                name="hasBalcony"
                label="Has balcony"
            />

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="taskDate"
              label="Task date"
              showTimeSelect
              dateFormat="MM/dd/yyyy  -  h:mm aa"
              //iconSrc={<FaCalendarDays className="text-primary" size={18}/>}
              iconSrc={<CalendarDays size={18} className="text-primary"/>}
            />

            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button className='w-full flex justify-center'>Create</Button>
                {/* <ConfirmationModal buttonText='Create' text='Your task has been created successfully'/> */}
            </div>
        </form>
    </Form>
  )
}

export default NewTaskForm