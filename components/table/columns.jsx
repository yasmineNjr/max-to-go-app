import { user } from "@/public/assets"
import Image from "next/image"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegCirclePause } from "react-icons/fa6";
import { TbLockPassword } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import Badge from "../Badge";
import UserComponent from "../UserComponent";
import DeleteModal from "../DeleteModal";

export const columns = [

    {
      accessorKey: "owner",
      header: "Owner",
      cell: ({ row }) => 
        <div className="min-w-[120px]" >
          <UserComponent img={user} name={row.original.owner}/>
        </div>,
    },
    {
        accessorKey: "delete",
        header: "Delete account",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center cursor-pointer">
                {/* <Badge  
                      text='delete' 
                      source='delete'
                      icon={<RiDeleteBin6Line color={row.original.delete === true ? 'white' : 'red'}/>} 
                      style={row.original.delete === true ? 'bg-red boreder-2 border-red' : 'bg-transparent border-2 border-red'} /> */}
                    <DeleteModal  buttonTxt='delete' 
                                  text='Are you sure you wan to delete the user?' 
                                  icon={<RiDeleteBin6Line color={row.original.delete === true ? 'white' : 'red'}/>}  
                                  style={row.original.delete === true ? 'bg-red boreder-2 border-red' : 'bg-transparent border-2 border-red'}
                                  user={row.original.owner}/>
              </div>
            );
          },
    },
    {
      accessorKey: "pause",
      header: "Pause",
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center">
            <Badge  
                  text='pause' 
                  icon={<FaRegCirclePause color={row.original.pause === true ? 'white' : '#EB7C44'}/>} 
                  style={row.original.pause === true ? 'bg-orange boreder-2 border-orange' : 'bg-transparent border-2 border-orange'} />
          </div>
        );
      },
    },
    {
        accessorKey: "password",
        header: "Change password",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center cursor-pointer">
                <Badge  
                      text='change' 
                      source='password'
                      user={row.original.owner}
                      icon={<TbLockPassword color={row.original.password === true ? 'white' : '#FECC02'}/>} 
                      style={row.original.password === true ? 'bg-secondaryColor boreder-2 border-secondaryColor' : 'bg-transparent border-2 border-secondaryColor'} />
              </div>
            );
          },
    },
    {
        accessorKey: "messaging",
        header: "Messaging",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center cursor-pointer">
                <Badge  
                      text='send' 
                      source='message'
                      user={row.original.owner}
                      icon={<FiSend color={row.original.messaging === true ? 'white' : '#07A2FB'}/>} 
                      style={row.original.messaging === true ? 'bg-blue-200 boreder-2 border-blue-200' : 'bg-transparent border-2 border-blue-200'} />
              </div>
            );
          },
    },
    {
        accessorKey: "invoices",
        header: "User invoices with history",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center cursor-pointer">
                <Badge  
                      source='invoices'
                      user={row.original.owner}
                      text='Invoices' 
                      icon={<FaFileInvoiceDollar color={row.original.invoices === true ? 'white' : '#121EFF'}/>} 
                      style={row.original.invoices === true ? 'bg-blue-600 boreder-2 border-blue-600' : 'bg-transparent border-2 border-blue-600'} />
              </div>
            );
          },
    },
    {
        accessorKey: "purchases",
        header: "Give free purchases",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center">
                <Badge  
                      text='Free' 
                      icon={<BiSolidPurchaseTag color={row.original.purchases === true ? 'white' : '#14C004'}/>} 
                      style={row.original.purchases === true ? 'bg-green boreder-2 border-green' : 'bg-transparent border-2 border-green'} />
              </div>
            );
          },
    },
]
