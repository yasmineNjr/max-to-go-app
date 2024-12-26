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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjBkN2E3OTA5LTA2NzMtNGE3Zi01MzBlLTA4ZGQyMjY0MzU4NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFkbWluQGRvbWFpbi5jb20iLCJFbWFpbENvbmZpcm1lZCI6IlRydWUiLCJJc0FwcHJvdmVkIjoiVHJ1ZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzM1MjIxMDAzLCJpc3MiOiJodHRwczovL2FwaS5tYXgtdG9nby5jb20iLCJhdWQiOiJodHRwczovL21heC10b2dvLmNvbS8ifQ.bQ3st1FQNxXhPC7dbJmDrAqMTGKDSnbteCSyCw45W7k'; // Replace with your actual token

    try {
      const response = await axios.get('https://api.max-togo.com/api/admin/getall', {
        mode: 'no-cors',
        headers: {
          Authorization: `Bearer ${token}`, // Add the token here
        },
      });
  
      console.log('Response:', response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error Response:', error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error Request:', error.request);
      } else {
        // Something else caused the error
        console.error('Error Message:', error.message);
      }
  }
  
  };
  const fetchDataProxy = async () => {
    try {
      const response = await axios.get('/api/proxy');
      console.log('Data:', response.data);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };
  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Users'/>
      <Command  icon={<IoMdNotificationsOutline color='#FECC02'/>} 
                text='Account creation notices'
                onClickHandler={createNoticesHandler}/>
      <DataTable data={data} columns={columns}/>
      {/* <Button title='get users' onClickHandler={fetchDataProxy}/> */}
    </div>
  )
}

export default Users