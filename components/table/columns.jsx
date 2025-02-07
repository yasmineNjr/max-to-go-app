import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegCirclePause } from "react-icons/fa6";
import { TbLockPassword } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
const Badge = dynamic( 
  () => import('../Badge'),
  {
    loadingTable: () => <p className="text-primary">Loading...</p>
  })
const UserComponent = dynamic( 
  () => import('../UserComponent'),
  {
    loadingTable: () => <p className="text-primary">Loading...</p>
  })
const DeleteModal = dynamic( 
  () => import('../DeleteModal'),
  {
    loadingTable: () => <p className="text-primary">Loading...</p>
  })
import dynamic from "next/dynamic";
const ChangePasswordModal = dynamic( 
  () => import('../ChangePasswordModal'),
  {
    loadingTable: () => <p className="text-primary">Loading...</p>
  })

export const columns = (reloadData) => [

    {
      accessorKey: "owner",
      header: "Owner",
      cell: ({ row }) => 
        <div className="min-w-[150px]" >
          <UserComponent id={row.original.id} img={row.original.logo} name={row.original.companyName}/>
        </div>,
    },
    {
        accessorKey: "delete",
        header: "Delete",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center cursor-pointer">
                <DeleteModal  buttonTxt='' 
                              text={`Are you sure you want to delete the company ${row.original.companyName}?`} 
                              icon={<RiDeleteBin6Line color={row.original.delete === true ? 'white' : 'red'}/>}  
                              style={row.original.delete === true ? 'bg-red boreder-2 border-red' : 'bg-transparent border-2 border-red'}
                              companyId={row.original.id}
                              onSuccess={reloadData} // Pass reloadData to dialog
                              source='delete'
                />
              </div>
            );
          },
    },
    {
      accessorKey: "pause",
      header: "ِApprove",
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center cursor-pointer">
            {/* <Badge  
                  text={row.original.isApproval === true ? 'UnApprove' : 'Approve'}
                  source='pause'
                  isApproval={row.original.isApproval}
                  companyId={row.original.id}
                  icon={row.original.isApproval === true 
                          ? 
                          <IoMdCloseCircle size={16} color={row.original.isApproval === true ? 'white' : '#EB7C44'}/> 
                          :
                          <FaCheckCircle size={16} color={row.original.isApproval === true ? 'white' : '#EB7C44'}/>
                        } 
                  style={row.original.isApproval === true ? 'bg-orange boreder-2 border-orange' : 'bg-transparent border-2 border-orange'} 
                  onSuccess={reloadData} // Pass reloadData to Badge or Dialog
                  /> */}
                  <DeleteModal  buttonTxt=''
                                text={`Are you sure you want to ${row.original.isApproval === true ? 'unapprove' : 'approve'} the company ${row.original.companyName}?`} 
                                icon={row.original.isApproval === true 
                                  ? 
                                  <IoMdCloseCircle size={16} color={row.original.isApproval === true ? 'white' : '#EB7C44'}/> 
                                  :
                                  <FaCheckCircle size={16} color={row.original.isApproval === true ? 'white' : '#EB7C44'}/>
                                } 
                                style={row.original.isApproval === true ? 'bg-orange boreder-2 border-orange' : 'bg-transparent border-2 border-orange'} 
                                companyId={row.original.id}
                                onSuccess={reloadData} // Pass reloadData to dialog
                                source='approve'
                                isApproval={row.original.isApproval}
                  />
          </div>
        );
      },
    },
    {
        accessorKey: "password",
        header: "password",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center cursor-pointer">
                <ChangePasswordModal  
                              buttonTxt='' 
                              text='Are you sure you wan to delete the user?' 
                              icon={<TbLockPassword color={row.original.password === true ? 'white' : '#FECC02'}/>} 
                              style={row.original.password === true ? 'bg-primary boreder-2 border-primary' : 'bg-transparent border-2 border-primary'}
                              user={row.original.owner}/>
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
                      text='' 
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
        // header: "User invoices with history",
        header: "Invoices",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center cursor-pointer">
                <Badge  
                      source='invoices'
                      user={row.original.owner}
                      text='' 
                      icon={<FaFileInvoiceDollar color={row.original.invoices === true ? 'white' : '#121EFF'}/>} 
                      style={row.original.invoices === true ? 'bg-blue-600 boreder-2 border-blue-600' : 'bg-transparent border-2 border-blue-600'} />
              </div>
            );
          },
    },
    {
        accessorKey: "purchases",
        // header: "Give free purchases",
        header: "Purchases",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center">
                <Badge  
                      text='' 
                      icon={<BiSolidPurchaseTag color={row.original.purchases === true ? 'white' : '#14C004'}/>} 
                      style={row.original.purchases === true ? 'bg-green boreder-2 border-green' : 'bg-transparent border-2 border-green'} />
              </div>
            );
          },
    },
]
