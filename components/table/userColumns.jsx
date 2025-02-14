
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
import { CircleCheckBig, Files, Hourglass, LockKeyhole, Send, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const ChangePasswordModal = dynamic( 
  () => import('../ChangePasswordModal'),
  {
    loadingTable: () => <p className="text-primary">Loading...</p>
  })

export const userColumns = (reloadData, setSelectedRows, selectedRows) => [
  {
      id: "select",
      header: ({ table }) => (
          <Checkbox
              className='mx-2'
              checked={table.getIsAllPageRowsSelected()}
              onCheckedChange={(value) => {
              table.toggleAllPageRowsSelected(!!value);
              }}
              aria-label="Select all"
          />
      ),
      cell: ({ row }) => (
        <Checkbox
          className='mx-2'
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
          aria-label={`Select row ${row.index + 1}`}
        />
      ),
    },
    {
      header: "#",
      cell: ({ row }) => {
        return <p className="text-14-medium ">{row.index + 1}</p>;
      },
    },
    {
      accessorKey: "owner",
      header: "Owner",
      cell: ({ row }) => 
        <div className="min-w-[150px]" >
          <UserComponent id={row.original.id} img={row.original.logo} name={row.original.owner}/>
        </div>,
    },
    {
      accessorKey: "pause",
      header: "Approve",
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center cursor-pointer">
            {
              selectedRows.length > 0 
              ?
                row.original.isApproval === true 
                ?
                <CircleCheckBig size={16} className="text-textPrimary"/>
                :
                <Hourglass size={16} className="text-textPrimary"/>
              :
              <DeleteModal  buttonTxt={row.original.isApproval === true 
                                    ?
                                    <CircleCheckBig size={16} className="text-[#4ADE80]"/>
                                    :
                                    <Hourglass size={16} className="text-[#4ADE80]"/>
                                    }
                                    // #EB7C44
                          actionTxt={row.original.isApproval === true ? 'Unapprove' : 'Approve'}
                          title={row.original.isApproval === true ? 'Unapprove Company' : 'Approve Company'}
                          text={`Are you sure you want to ${row.original.isApproval === true ? 'unapprove' : 'approve'} the company ${row.original.companyName}?`} 
                          style={row.original.isApproval === true ? 'bg-orange boreder-2 border-orange' : 'bg-transparent border-2 border-orange'} 
                          companyId={row.original.id}
                          onSuccess={reloadData} // Pass reloadData to dialog
                          source='approve'
                          isApproval={row.original.isApproval}
              />
            }
          </div>
        );
      },
    },
    {
        accessorKey: "password",
        header: "Reset Password",
        cell: ({ row }) => {
            return (
              <div className="flex items-center justify-center cursor-pointer">
                {
                  selectedRows.length > 0
                  ?
                  <LockKeyhole size={16} className="text-textPrimary"/>
                  :
                  <ChangePasswordModal  
                      buttonTxt={<LockKeyhole size={16} className="text-[#FACC15]"/>}
                      text='Are you sure you wan to delete the user?' 
                      style={row.original.password === true ? 'bg-primary boreder-2 border-primary' : 'bg-transparent border-2 border-primary'}
                      user={row.original.owner}/>
                }
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
                {
                  selectedRows.length > 0
                  ?
                  <Send size={18} className="text-textPrimary"/>
                  :
                  <Button variant='ghost'>{<Send size={18} className="text-[#2563EB]"/>}</Button>
                  // {/* #07A2FB */}
                }
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
                {
                  selectedRows.length > 0
                  ?
                  <Files size={18} className="text-textPrimary"/>
                  :
                  <Button variant='ghost'>{<Files size={18} className="text-[#FB923C]"/>}</Button>
                  // {/* #121EFF */}
                }
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
                {
                  selectedRows.length > 0
                  ?
                  <ShoppingCart size={18} className="text-textPrimary"/>
                  :
                  <Button variant='ghost'>{<ShoppingCart size={18} className="text-[#9333EA]"/>}</Button>
                  // {/* #14C004 */}
                }
              </div>
            );
          },
    },
    {
      accessorKey: "delete",
      header: "Delete",
      cell: ({ row }) => {
          return (
            <div className="flex items-center justify-center cursor-pointer">
              {
                selectedRows.length > 0
                ?
                <Trash2 size={18} className="text-textPrimary"/>
                :
                <DeleteModal  buttonTxt={<Trash2 size={18} className="text-destructive"/>}
                            actionTxt='Delete'
                            title='Delete Company'
                            text={`Are you sure you want to delete the company ${row.original.companyName}?`} 
                            style={row.original.delete === true ? 'bg-red boreder-2 border-red' : 'bg-transparent border-2 border-red'}
                            companyId={row.original.id}
                            onSuccess={reloadData} // Pass reloadData to dialog
                            source='deleteUser'
              />
              }
            </div>
          );
        },
  },
]
