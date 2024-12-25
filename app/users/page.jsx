'use client'

import Title from '@/components/Title'
import React from 'react'
import styles from '../styles'
import Command from '@/components/Command'
import { IoMdNotificationsOutline } from "react-icons/io";
import { DataTable } from '@/components/table/DataTable';
import { columns } from '@/components/table/columns';
import { users } from '@/constants';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import Button from '@/components/Button'

const Users = () => {

  const router = useRouter()
  const data = users;

  const createNoticesHandler = () => {
    router.push('/users/create-notices')
  }

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.max-togo.com/api/admin/getall', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      if (error.response) {
        console.error('Error details:', error.response.data);
      }
    }
  };

  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Users'/>
      <Command  icon={<IoMdNotificationsOutline color='#FECC02'/>} 
                text='Account creation notices'
                onClickHandler={createNoticesHandler}/>
      <DataTable data={data} columns={columns}/>
      <Button title='get users' onClickHandler={fetchData}/>
    </div>
  )
}

export default Users