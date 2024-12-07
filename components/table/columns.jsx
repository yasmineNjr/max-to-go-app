"use client"

import { user } from "@/public/assets"
import Image from "next/image"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCirclePause } from "react-icons/fa6";
import { TbLockPassword } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import Badge from "../Badge";

export const columns = [

    {
      accessorKey: "owner",
      header: "Owner",
      cell: ({ row }) => <div className="flex flex-row items-center justify-between gap-2 min-w-[120px]  ">
            <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/>
            <p className="w-full text-left text-textDefault font-light">{row.original.owner}</p>
        </div>,
    },
    {
        accessorKey: "delete",
        header: "Delete account",
        cell: ({ row }) => {
            return (
              <Badge  text='delete' 
                      icon={<RiDeleteBin6Line color={row.original.delete === true ? 'white' : 'red'}/>} 
                      style={row.original.delete === true ? 'bg-red boreder-2 border-red' : 'bg-transparent border-2 border-red'} />
            );
          },
    },
    {
      accessorKey: "pause",
      header: "Pause",
      cell: ({ row }) => {
        return (
          <Badge  text='pause' 
                  icon={<FaRegCirclePause color={row.original.pause === true ? 'white' : '#EB7C44'}/>} 
                  style={row.original.pause === true ? 'bg-orange boreder-2 border-orange' : 'bg-transparent border-2 border-orange'} />
        );
      },
    },
    {
        accessorKey: "password",
        header: "Change password",
        cell: ({ row }) => {
            return (
              <Badge  text='change' 
                      icon={<TbLockPassword color={row.original.password === true ? 'white' : '#FECC02'}/>} 
                      style={row.original.password === true ? 'bg-secondaryColor boreder-2 border-secondaryColor' : 'bg-transparent border-2 border-secondaryColor'} />
            );
          },
    },
    {
        accessorKey: "messaging",
        header: "Messaging",
        cell: ({ row }) => {
            return (
              <Badge  text='send' 
                      icon={<FiSend color={row.original.messaging === true ? 'white' : '#07A2FB'}/>} 
                      style={row.original.messaging === true ? 'bg-blue-200 boreder-2 border-blue-200' : 'bg-transparent border-2 border-blue-200'} />
            );
          },
    },
    {
        accessorKey: "invoices",
        header: "User invoices with history",
        cell: ({ row }) => {
            return (
              <Badge  text='Invoices' 
                      icon={<FaFileInvoiceDollar color={row.original.invoices === true ? 'white' : '#121EFF'}/>} 
                      style={row.original.invoices === true ? 'bg-blue-600 boreder-2 border-blue-600' : 'bg-transparent border-2 border-blue-600'} />
            );
          },
    },
    {
        accessorKey: "purchases",
        header: "Give free purchases",
        cell: ({ row }) => {
            return (
              <Badge  text='Free' 
                      icon={<BiSolidPurchaseTag color={row.original.purchases === true ? 'white' : '#14C004'}/>} 
                      style={row.original.purchases === true ? 'bg-green boreder-2 border-green' : 'bg-transparent border-2 border-green'} />
            );
          },
    },
]
