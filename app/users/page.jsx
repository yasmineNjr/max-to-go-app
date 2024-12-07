'use client'

import Title from '@/components/Title'
import React from 'react'
import styles from '../styles'
import Command from '@/components/Command'
import { IoMdNotificationsOutline } from "react-icons/io";
import { DataTable } from '@/components/table/DataTable';
import { columns } from '@/components/table/columns';
import { getUserData } from '@/constants';
import { useRouter } from 'next/navigation';

const Users = async() => {

  const router = useRouter()
  const data = await getUserData();

  const createNoticesHandler = () => {
    router.push('/users/create-notices')
  }

  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Users'/>
      <Command  icon={<IoMdNotificationsOutline color='#FECC02'/>} 
                text='Account creation notices'
                onClickHandler={createNoticesHandler}/>
      <DataTable data={data} columns={columns}/>
    </div>
  )
}

export default Users