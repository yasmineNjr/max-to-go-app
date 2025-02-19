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
import PhoneInput from 'react-phone-number-input'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const RenderField= ({field, props}) => {
    
    const [showPassword, setShowPassword] = useState(false);
    const passwordIcon =  showPassword 
                            ?
                            <Eye 
                                className="mr-3 cursor-pointer text-textPrimary group-focus-within:text-primary" 
                                onClick={() => setShowPassword((prev) => !prev)}/>
                            :
                            <EyeOff 
                                className="mr-3 cursor-pointer text-textPrimary group-focus-within:text-primary" 
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
            inputProps
         } = props;
    
    switch(fieldType){
        case FormFieldType.INPUT:
            return(
                <div className="flex rounded-xl border border-textPrimary bg-transparent items-center overflow-hidden focus-within:border-primary group">
                    <div className="ml-5 text-textPrimary group-focus-within:text-primary">{iconSrc}</div>
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            {...field}
                            className="shad-input bg-transparent "
                            onChange={onChange}
                            value={value}
                            readOnly={readOnly}
                            id={id}
                            type={type === 'password' && showPassword ? 'text' : type}
                            min={min}
                            required={required}
                            {...inputProps}  // Make sure this is here!
                        />
                    </FormControl>
                    {
                        type === 'password' && passwordIcon
                       
                    }
                </div>
            )

        case FormFieldType.PHONE_INPUT:
            return(
                <div className="flex rounded-xl border border-textPrimary bg-transparent items-center overflow-hidden focus-within:border-primary group">
                <FormControl>
                    <PhoneInput
                        defaultCountry='US'
                        placeholder={placeholder}
                        international
                        withCountryCallingCode
                        value={field.value}
                        onChange={onChange}
                        className="input-phone bg-transparent text-customSecondary "
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
                    className="shad-textArea"
                    disabled={props.disabled}
                    {...inputProps}  // Make sure this is here!
                   />
                </FormControl>
            )
          
        case FormFieldType.SELECT:
            return(
                <div  className="shad-select group focus-within:!border-primary transition-colors duration-300">
                    <div className="ml-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300">
                        {iconSrc}
                    </div>
                    <FormControl>
                        <Select
                            defaultValue={field.value}
                            onValueChange={field.onChange}
                        >
                            <FormControl>
                            <SelectTrigger className="shad-select-trigger text-foreground">
                                <SelectValue placeholder={placeholder} />
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
                <div className="flex rounded-xl border border-textPrimary bg-transparent items-center overflow-hidden focus-within:border-primary group">
                    <div className="ml-5 text-textPrimary group-focus-within:text-primary">{iconSrc}</div>
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
            <div className="text-left">
                <FormLabel className='text-foreground font-normal text-sm lg:text-md '>{label}</FormLabel>
            </div>
           )}

           <RenderField field={field} props={props}/>

           <FormMessage className="shad-error"/>
        </FormItem>
        )}
    />
  )
}

export default CustomFormField
