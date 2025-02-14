'use client'

import Title from '@/components/Title'
import React, { useEffect, useState } from 'react'
import styles from '../styles'
import { columns } from '@/components/table/columns';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import { user } from '@/public/assets'
import { useAppContext } from '@/context/AppContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import dynamic from 'next/dynamic'
import { BellRing, Send, UserRoundPlus } from 'lucide-react'
import { users } from '@/constants';
const DataTable = dynamic( 
  () => import('@/components/table/DataTable'),
  {
    loadingTable: () => <p>Loading...</p>
  })

const Users = () => {

  const router = useRouter()
  const { searchQuery, token } = useAppContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const createNoticesHandler = () => {
    router.push('/users/create-notices')
  }

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
    fetchData();
  }, []);

  const commandsLst = [
    { commandIcon: <UserRoundPlus size={16}/> , commandText:'Create a new user', clickHandler: () => router.push('/users/create-user')  },
    { commandIcon: <Send size={16}/> , commandText:'Send a group message', clickHandler: () => router.push('/users/send-group')  },
    // { commandIcon: <Send size={16}/> , commandText:'Send a group message', clickHandler: () => console.log('send')  },
    { commandIcon: <BellRing size={16}/> , commandText:'Account creation notifications', clickHandler: createNoticesHandler },
  ]

  // Filter data based on searchQuery
   const filteredData = data?.filter((item) =>
    item.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ProtectedRoute>
    {
      loading ? 
     // Spinner
      <div className={`${styles.mainSection} flex items-center justify-center h-screen`}>
          <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
     :
      <div className={`${styles.mainSection}`}>
        <Title text='Users' source='users' commands={commandsLst}/>
        {
          filteredData ?
            <DataTable data={filteredData} columns={columns(fetchData)}/>
            :
            <div className='flex items-center justify-center h-64 text-foreground'>No Companies found.</div>
        }
      </div>
    }
    </ProtectedRoute>
  )
}

export default Users