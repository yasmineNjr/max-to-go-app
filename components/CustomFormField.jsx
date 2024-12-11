"use client"
// import { E164Number } from "libphonenumber-js/core";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "./ui/input";
import { Control } from "react-hook-form"

import Image from "next/image";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { FormFieldType } from "@/constants";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
// import { Checkbox } from "./ui/checkbox";

const RenderField= ({field, props}) => {
    
    const { fieldType, iconSrc, iconAlt, placeholder, showTimeSelect, dateFormat, renderSkeleton } = props;
    
    switch(fieldType){
        case FormFieldType.INPUT:
            return(
                <div className="flex rounded-xl border-2 border-secondaryColor bg-transparent items-center">
                    <div className="ml-5">{iconSrc}</div>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className="shad-input border-0 text-textPrimary"
                        />
                    </FormControl>
                </div>
            )

        case FormFieldType.TEXTAREA:
            return(
                <FormControl>
                   <Textarea
                    placeholder={placeholder}
                    {...field}
                    className="shad-textArea text-textPrimary"
                    disabled={props.disabled}
                   />
                </FormControl>
            )
          
        case FormFieldType.SELECT:
            return(
                <div className="flex rounded-xl border-2 border-secondaryColor bg-transparent items-center">
                    <div className="mx-5">{iconSrc}</div>
                    <FormControl>
                        <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                        >
                            <FormControl>
                            <SelectTrigger className="shad-select-trigger text-customSecondary">
                                <SelectValue placeholder={placeholder}/>
                            </SelectTrigger> 
                            </FormControl>
                            <SelectContent className="shad-select-content ">{props.children}</SelectContent>
                        </Select>
                    </FormControl>
                </div>
            )

        default:
            break;
    }
  }
  
const CustomFormField = ( props) => {

    const { control, fieldType, name, label } = props; 
    
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem className="flex-1">
           {fieldType !== FormFieldType.CHECKBOX && label &&(
            <FormLabel className='text-primary font-normal text-sm lg:text-lg'>{label}</FormLabel>
           )}

           <RenderField field={field} props={props}/>

           <FormMessage className="shad-error"/>
        </FormItem>
        )}
    />
  )
}

export default CustomFormField
