'use client'

import React, { useEffect, useState } from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import Command from '@/components/Command'
import { FaPlus } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import InvoiceItem from '@/components/InvoiceItem'
import { formatDateWithPadding, invoices, users } from '@/constants'
import ProtectedRoute from '@/components/ProtectedRoute'
import Image from 'next/image'
import { TiUserAddOutline } from "react-icons/ti";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DatePicker } from '@/components/DatePicker'
import { GrPowerReset } from 'react-icons/gr'

const Invoices = () => {

  const router = useRouter();
  const newInvoiceHandler = () => {
    router.push('/invoices/create-new')
  }
  const [invoicesLst, setInvoicesLst] = useState(invoices); 
  const [selectedValue, setSelectedValue] = useState(""); 
  const [selectedDate, setSelectedDate] = useState(""); 

  const handleValueChange = (value) => {
    setSelectedValue(value); // Update state with selected value
  };

  useEffect(() => {
    const invDate = selectedDate !== "" ? formatDateWithPadding(selectedDate) : "";
  
    const filteredInvoices = invoices.filter((inv) => {
      const matchesOwner = selectedValue !== "" ? inv.owner === selectedValue : true;
      const matchesDate = invDate !== "" ? inv.date === invDate : true;
  
      return matchesOwner && matchesDate;
    });
  
    setInvoicesLst(filteredInvoices);
  }, [selectedValue, selectedDate, invoices]);

  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Invoices'/>
        <Command 
          icon={<FaPlus color='#FECC02'/>} 
          text='Create new invoice'
          onClickHandler={newInvoiceHandler}
        />
        <div className='flex flex-col sm:flex-row w-full justify-center gap-5'>
          <div className="flex flex-row p-1 w-full items-center border-2 border-secondaryColor rounded-xl text-md overflow-hidden">
            <Select  value={selectedValue} onValueChange={handleValueChange}>
              <SelectTrigger className="w-full border-none ">
                <SelectValue placeholder="Company..." />
              </SelectTrigger>
              <SelectContent>
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
              </SelectContent>
            </Select>
            <GrPowerReset size={20} color='#fecc02' className='mr-1' onClick={() => setSelectedValue("")}/>
          </div>
         
          <div className="flex flex-row p-1 w-full items-center border-2 border-secondaryColor rounded-xl text-md overflow-hidden">
            <DatePicker style='w-full' date={selectedDate} setDate={setSelectedDate}/>
            <GrPowerReset size={20} color='#fecc02' className='mr-1' onClick={() => setSelectedDate("")}/>
          </div>
        </div>
        <div className='flex flex-wrap w-full gap-10 justify-center'>
        { 
          invoicesLst.map((invoice) => (
              <InvoiceItem 
                  owner={invoice.owner} 
                  id={invoice.id} 
                  price={invoice.price} 
                  quantity={invoice.quantity} 
                  date={invoice.date}/>
            ))
          }
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Invoices