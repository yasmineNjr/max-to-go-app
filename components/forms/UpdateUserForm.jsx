'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Form, FormControl } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { apartments, businessTypes, FormFieldType, types } from "@/constants"
import { SelectItem } from "../ui/select"
import "react-datepicker/dist/react-datepicker.css";
import {  Building, Building2, CalendarDays, ClipboardCheck, Hash, Mail, Phone, TypeOutline, UserRound } from "lucide-react"
import { Button } from "../ui/button"
import FileUploader from "../FileUploader"

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  })

const UpdateUserForm = ({ user }) => {

    const form = useForm();
    const buttonTxt = user ? 'Update' : 'Create';

    const onSubmit = (data) => {
        console.log(user);
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-secondary font-bold space-y-6 flex flex-1 flex-col w-full p-5 rounded-xl mb-5">
            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                label="Company Name"
                placeholder="Enter company name..."
                iconSrc={<Building2 size={20}/>}
                iconAlt="name"
                value={user ? user.companyName : null}
            />

            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="organizationNum"
                label="Organization Number"
                placeholder="Enter organization number..."
                iconSrc={<Hash size={20}/>}
                iconAlt="organizationNum"
                value={user ?  user.organizationNumber : null}
            />

            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="responsiblePerson"
                label="Name Of Responsible Person"
                placeholder="Enter name Of responsible person..."
                iconSrc={<UserRound size={20}/>}
                iconAlt="responsiblePerson"
                value={user ? user.nameOfResponsiblePerson : null}
            />
            
            <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="address"
                label='Address'
                placeholder='Enter the address...'
                value={user ? user.address : null}
            />

            <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="businessType"
                label="Business Type"
                placeholder="Select the business type..."
                iconSrc={<TypeOutline size={20}/>}
                value={user ? user.typeOfBusiness : null}
                >
                {businessTypes.map((business) => (
                <SelectItem key={business.id} value={user ? business.title : null}
                            className='hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground'>
                    <div className="flex items-center gap-2 cursor-pointer">
                     <p className="text-foreground">{business.title}</p>
                    </div>
                </SelectItem>
                ))} 
            </CustomFormField>

            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                id="email"
                label="Email"
                placeholder="Enter company email..."
                iconAlt="email"
                iconSrc={<Mail size={20} />}
                type='mail'
                // required={true}
                value={user ? user.email : null}
                // onChange={(e) => setEmail(e.target.value)}
            />

            <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="phoneNumer"
                label="Phone Numer"
                placeholder="Enter phone numer..."
                iconSrc={<Phone size={20}/>}
                iconAlt="phoneNumer"
                value={user ? user.phone : null}
            />

            <CustomFormField
                fieldType={FormFieldType.DATE_PICKER}
                control={form.control}
                name="creationDate"
                label="Creation Date"
                placeholder="Enter phone numer..."
                iconSrc={<CalendarDays size={20}/>}
                iconAlt="phoneNumer"
                // value={user.phone}
            />

            <CustomFormField
                fieldType={FormFieldType.SKELETON}
                control={form.control}
                name="file"
                label="Company File"
                renderSkeleton={(field) => (
                    <FormControl>
                      <FileUploader files={field.value} onChange={field.onChange} />
                    </FormControl>
                )}
            />

            <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="notes"
                label='Notes'
                placeholder='Write the note here...'
            />

            <div className="flex flex-1 justify-center items-center w-full mt-6">
                <Button className='w-full flex justify-center'>{buttonTxt}</Button>
            </div>
        </form>
    </Form>
  )
}

export default UpdateUserForm