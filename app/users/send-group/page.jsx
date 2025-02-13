'use client'

import styles from '@/app/styles'
import ProtectedRoute from '@/components/ProtectedRoute'
import { userColumns } from '@/components/table/userColumns'
import UserDataTable from '@/components/table/UserDataTable'
import Title from '@/components/Title'
import { users } from '@/constants'
import React, { useEffect, useState } from 'react'

const SendGroupPage = () => {

    const [selectedRows, setSelectedRows] = useState([]);

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
    
          // console.log('Data:', response.data.data.companies);
          // console.log('Data:');
          // setData(response.data.data.companies)
          setData(modifiedData)
        } catch (error) {
          console.error('Error:', error.response?.data || error.message); // Log full error response
          setError(error.response?.data || error.message);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      };

    useEffect(() => {
        console.log("Selected Rows:", selectedRows);
    }, [selectedRows]);

  return (
    <ProtectedRoute>
        <div className={`${styles.mainSection}`}>
            <Title text='Send A Group Message' />
            <div className='mt-5'>
             {
                users ?
                // <DataTable data={users} columns={userColumns(fetchData, setSelectedRows)}/>
                <UserDataTable data={users} columns={userColumns(fetchData, setSelectedRows)} setSelectedRows={setSelectedRows} />
                :
                <div className='flex items-center justify-center h-64 text-foreground'>No Companies found.</div>
             }
              <div>{JSON.stringify(selectedRows, null, 2)}</div>
             </div>
        </div>
    </ProtectedRoute>
  )
}

export default SendGroupPage