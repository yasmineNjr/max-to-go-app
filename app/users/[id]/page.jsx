'use client'

import styles from '@/app/styles'
import Button from '@/components/Button';
import ContentComponent from '@/components/ContentComponent';
import Title from '@/components/Title'
import { users } from '@/constants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from '@/components/PDFDocument';
import { useSearchParams } from 'next/navigation';
import { user } from '@/public/assets';
import { useAppContext } from '@/context/AppContext';
import axios from 'axios';
import CompanyLogo from '@/components/CompanyLogo';

const UserInfoPage = ({ params }) => {

  // const user = users.find((user) => user.name === params.id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const { token } = useAppContext();
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const companyId = params.id;

  // const [formData, setFormData] = useState({ name: "xxx", email: "xxx@mail.com" });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  
  // const data1 = {
  //   name: 'user.companyName',
  //   img: 'user.img',
  //   company : 'AL-Rahma Company',
  //   number: '#987800255',
  //   responsiblePerson: 'user.name',
  //   address : 'Transfer form Gaza to rafah',
  //   business :'Transfer form Gaza to rafah',
  //   email : `${'user.name'}@gmail.com`,
  //   phone : '+978487485785',
  //   description: 'This text can be installed on any design without a problem. It will not look like copied, unorganized, unformatted, or even incomprehensible'
  // }

  useEffect(() => {
    const fetchCompanyById = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage or context
        if (!token) {
          console.error('No token available');
          return;
        }
    
        const response = await axios.get('/api/get-by-id', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            companyId, // Pass companyId as a query parameter
          },
        });
    
        console.log('Company Data:', response.data.data);
        setData(response.data.data);
        return response.data; // Process the data as needed
      } catch (error) {
        console.error('Error fetching company by ID:', error.response?.data || error.message);
        setError(error.response?.data || error.message)
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };
    fetchCompanyById();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className={`${styles.mainSection}`}>
      <Title text='User Information'/>
      <div className='rounded-xl border-2 border-textPrimary bg-blue-400 w-full my-10 p-5 lg:p-10'>
        <div className='flex flex-row justify-center items-center w-full gap-5 text-textDefault'>
          <h3>User: </h3>
          <div 
              className="flex flex-row items-center justify-between gap-2"
          >
            {/* <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/> */}
            <CompanyLogo logoUrl={data.logo}/>
            <p className="w-full text-left text-textDefault font-light">{data.companyName}</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-start items-start w-full gap-5 text-textDefault my-5'>
        {/* lg:w-[50%] */}
          <div className='w-[100%] '>
            <ContentComponent title='Company Name: ' value={data.companyName}/>
            <ContentComponent title='Organization Number: ' value={data.organizationNumber}/>
            <ContentComponent title='Name of responsible person: ' value={data.nameOfResponsiblePerson}/>
            <ContentComponent title='Address : ' value={data.address}/>
            <ContentComponent title='Type Of Business :' value={data.typeOfBusiness}/>
            <ContentComponent title='Email : ' value={data.email}/>
            <ContentComponent title='Phone Numer : ' value={data.phone}/>
          </div>
          {/* <div className='w-[100%] lg:w-[50%]'>
            <ContentComponent title='Phone Numer : ' value='+978487485785'/>
            <ContentComponent title='Password : ' value='**********'/>
          </div> */}
        </div>
        <div className='w-[100%]'>
            <ContentComponent title='Brief Description of Your Company :' value={data.description}/>
          </div>
        <div className="flex flex-col md:flex-row flex-1 justify-center items-center w-full mt-10 gap-3">
            { source === 'notification' && 
                <Button styles='w-[100%] lg:w-[50%] rounded-3xl py-2 text-[14px] font-bold' 
                    title='Accept'
                    // onClickHandler={generatePDF} 
                />
            }
            <PDFDownloadLink
              document={<PDFDocument data={data} />}
              fileName={`${data.companyName}.pdf`}
              className="w-[100%] lg:w-[50%] rounded-3xl py-2 text-[14px] font-bold cursor-pointer flex flex-row items-center justify-center gap-2 px-6 bg-secondaryColor h-[35px] text-primaryColor outline-none"
            >
              {({ load }) =>
                load ? "Generating PDF..." : "Download PDF"
              }
            </PDFDownloadLink>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage


