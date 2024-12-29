'use client'

import Title from '@/components/Title'
import React, { useEffect, useState } from 'react'
import styles from '../styles'
import Command from '@/components/Command'
import { IoMdNotificationsOutline } from "react-icons/io";
import { DataTable } from '@/components/table/DataTable';
import { columns } from '@/components/table/columns';
import { users } from '@/constants';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import Button from '@/components/Button'
import { useAppContext } from '@/context/AppContext'
import { user } from '@/public/assets'

const Users = () => {

  const router = useRouter()
  // const data1 = users;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { token } = useAppContext(); // Ensure token is accessible from context

  const createNoticesHandler = () => {
    router.push('/users/create-notices')
  }

  // const fetchData = async () => {
  //   if (!token) {
  //     console.log('No token available');
  //     return;
  //   }
  
  //   try {
  //     const response = await axios.get('/api/proxy', {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Check this value
  //       },
  //     });
  
  //     console.log('Data:', response.data.data.companies);
  //   } catch (error) {
  //     console.error('Error:', error.response?.data || error.message); // Log full error response
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage or context
      if (!token) {
        console.log('No token available');
        return;
      }
    
      try {
        const response = await axios.get('/api/proxy', {
          headers: {
            Authorization: `Bearer ${token}`, // Check this value
          },
        });
         // Modify the data here before saving it to state
         const modifiedData = response.data.data.companies.map(item => ({
          ...item,
          owner: item.companyName,
          delete: true,
          pause: false,
          password: true,
          messaging: false,
          invoices: true,
          purchases: false,
          img: {user}
        }));

        console.log('Data:', response.data.data.companies);
        // setData(response.data.data.companies)
        setData(modifiedData)
      } catch (error) {
        console.error('Error:', error.response?.data || error.message); // Log full error response
        setError(error.response?.data || error.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Users'/>
      <Command  icon={<IoMdNotificationsOutline color='#FECC02'/>} 
                text='Account creation notices'
                onClickHandler={createNoticesHandler}/>
      <DataTable data={data} columns={columns}/>
      {/* <Button title='get users' onClickHandler={fetchData}/> */}
      {/* <p>{data[5].logo}</p> */}
    </div>
  )
}

export default Users