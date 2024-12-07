import Title from '@/components/Title'
import React from 'react'
import styles from '../styles'
import Command from '@/components/Command'
import { IoMdNotificationsOutline } from "react-icons/io";
import { DataTable } from '@/components/table/DataTable';
import { columns } from '@/components/table/columns';
import { getUserData } from '@/constants';

const Users = async() => {

  const data = await getUserData();

  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Users'/>
      <Command icon={<IoMdNotificationsOutline color='#FFFFFF'/>} text='Account creation notices'/>
      <DataTable data={data} columns={columns}/>
    </div>
  )
}

export default Users