import styles from '@/app/styles';
import CommandButton from '@/components/CommandButton';
import ContentComponent from '@/components/ContentComponent';
import { users } from '@/constants';
import Image from 'next/image';
import React from 'react'

const InvoicesPage = ({ params }) => {

    const user = users.find((user) => user.name === params.id);
  return (
    <div className={`${styles.mainSection}`}>
    <div className='rounded-xl border-2 border-textPrimary bg-blue-200 w-full my-10 p-10'>
      <div className='flex flex-row justify-center items-center w-full gap-5 text-textDefault'>
        <h3>Owner: </h3>
        <div className="flex flex-row items-center justify-between gap-2">
          <Image src={user.img} alt='user' className='h-[30px] w-[30px] rounded-full'/>
          <p className="w-full text-left text-textDefault font-light">{user.name}</p>
        </div>
      </div>

      <div className='w-[100%] flex justify-start  mt-5 text-lef'>
        <ContentComponent title='ID: ' value='#22225454'/>
      </div>

      <div className='flex flex-row  mt-5 text-lef items-start w-full gap-5 text-textDefault'>
        <div className='w-[100%] lg:w-[50%] flex justify-start'>
          <ContentComponent title='Price: ' value='$100'/>
        </div>
        <div className='w-[100%] lg:w-[50%] flex justify-start'>
            <ContentComponent title='Quantity: ' value='2'/>
        </div>
      </div>

      <div className='w-[100%] flex justify-start mt-5'>
        <ContentComponent title='TOTAL: ' value='$200'/>
      </div>
     
      <div className='flex items-center flex-wrap justifiy-center gap-3 my-3 w-full'>
        <CommandButton title='Delete' styles='bg-transparent border-2'/>
        <CommandButton title='Amendment' styles='bg-transparent border-2'/>
        <CommandButton title='Send' styles='bg-transparent border-2'/>
        <CommandButton title='Export to PDF' styles='bg-transparent border-2'/>
    </div>
    </div>
  </div>
  )
}

export default InvoicesPage