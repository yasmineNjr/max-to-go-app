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
import { Textarea } from "./ui/textarea";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormFieldType } from "@/constants";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const RenderField= ({field, props}) => {
    
    const [showPassword, setShowPassword] = useState(false);
    const passwordIcon =  showPassword 
                            ?
                            <FaEye size={24} 
                                    color="#fecc02" 
                                    className="mr-3 cursor-pointer" 
                                    onClick={() => setShowPassword((prev) => !prev)}/>
                            :
                            <FaEyeSlash size={24} 
                                        color="#fecc02" 
                                        className="mr-3 cursor-pointer" 
                                        onClick={() => setShowPassword((prev) => !prev)}/>
    const { fieldType, 
            iconSrc, 
            iconAlt, 
            placeholder, 
            showTimeSelect, 
            dateFormat, 
            renderSkeleton, 
            onChange, id, 
            value, 
            readOnly, 
            type, 
            min, 
            required,
         } = props;
    
    switch(fieldType){
        case FormFieldType.INPUT:
            return(
                <div className="flex rounded-xl border-2 border-primary bg-transparent items-center overflow-hidden">
                    <div className="ml-5">{iconSrc}</div>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className="shad-input bg-transparent"
                            onChange={onChange}
                            value={value}
                            readOnly={readOnly}
                            id={id}
                            type={type === 'password' && showPassword ? 'text' : type}
                            min={min}
                            required={required}
                        />
                    </FormControl>
                    {
                        type === 'password' && passwordIcon
                       
                    }
                </div>
            )

        case FormFieldType.TEXTAREA:
            return(
                <FormControl>
                   <Textarea
                    placeholder={placeholder}
                    {...field}
                    className="shad-textArea text-foreground"
                    disabled={props.disabled}
                   />
                </FormControl>
            )
          
        case FormFieldType.SELECT:
            return(
                <div className="shad-select">
                    <div className="ml-5">{iconSrc}</div>
                    <FormControl>
                        <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                        >
                            <FormControl>
                            <SelectTrigger className="shad-select-trigger text-foreground">
                                <SelectValue placeholder={placeholder} className="placehoder:text-foreground"/>
                            </SelectTrigger> 
                            </FormControl>
                            <SelectContent className="shad-select-content ">{props.children}</SelectContent>
                        </Select>
                    </FormControl>
                </div>
            )

        case FormFieldType.SKELETON:
            return(
                renderSkeleton ? renderSkeleton(field) : null
            )

        case FormFieldType.DATE_PICKER:
            return(
                <div className="font-normal text-sm lg:text-lg flex rounded-xl border-2 border-primary bg-transparent items-center overflow-hidden h-12">
                    <div className="ml-5">{iconSrc}</div>
                    <FormControl>
                        <DatePicker selected={field.value} 
                                    onChange={(date) => field.onChange(date)} 
                                    dateFormat={dateFormat ?? 'MM/dd/yyyy'}
                                    showTimeSelect={showTimeSelect ?? false}
                                    timeInputLabel="Time:"
                                    className='date-picker'
                                    />
                    </FormControl>
                </div>
            )

        case FormFieldType.CHECKBOX:
            return (
                <FormControl>
                <div className="flex items-center gap-4">
                    <Checkbox
                    id={props.name}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="shad-checkbox"
                    />
                    <label htmlFor={props.name} className="checkbox-label text-foreground font-normal text-sm">
                    {props.label}
                    </label>
                </div>
                </FormControl>
            );

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
            <FormLabel className='text-foreground font-normal text-sm lg:text-md'>{label}</FormLabel>
           )}

           <RenderField field={field} props={props}/>

           <FormMessage className="shad-error"/>
        </FormItem>
        )}
    />
  )
}

export default CustomFormField
