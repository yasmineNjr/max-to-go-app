'use client'

import styles from '@/app/styles'
import Button from '@/components/Button';
import ContentComponent from '@/components/ContentComponent';
import Title from '@/components/Title'
import React, { useEffect, useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from '@/components/PDFDocument';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import CompanyLogo from '@/components/CompanyLogo';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Download, Pencil } from 'lucide-react';

const UserInfoPage = ({ params }) => {

  // const user = users.find((user) => user.name === params.id);
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileSrc, setFileSrc] = useState(null);
  const [loadingFile, setLoadingFile] = useState(false);
  const [errorFile, setErrorFile] = useState(null);
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const router = useRouter();
  const companyId = params.id;
  
  useEffect(() => {
    
    fetchCompanyById();

  }, []);

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
  
      // console.log('Company Data:', response.data.data);
      setData(response.data.data);
      //await fetchPermit(response.data.data.permit);
      return response.data; // Process the data as needed
    } catch (error) {
      console.error('Error fetching company by ID:', error.response?.data || error.message);
      setError(error.response?.data || error.message)
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  const fetchFile = async (filePath) => {
    try {
      setLoadingFile(true);
      const token = localStorage.getItem('token'); // Get token from localStorage
      if (!token) {
        setError('No token available');
        return;
      }
  
      // Sanitize and encode the file path
      // const sanitizedFilePath = filePath.replace(/\\/g, '/');
      const encodedFilePath = encodeURIComponent(filePath);
  
      // Make a request to the internal API that will forward the request to the external API
      const response = await axios.get(`/api/get-file?filePath=${encodedFilePath}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Include the token in the request header
          'Accept': '*/*',
        },
        responseType: 'blob', // Expect binary data
      });
  
      if (response.status !== 200) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
      const contentType = response.headers.get('Content-Type');
      console.log('Content-Type:', contentType);
      const fileUrl = URL.createObjectURL(response.data);
      // console.log('Generated file URL:', fileUrl);
      setFileSrc(fileUrl); // Update state
    } catch (error) {
      console.error('Error fetching file:', error);
      setErrorFile('An error occurred while fetching the file.');
    } finally {
      setLoadingFile(false);
    }
  };
  
  const getFileExtension = (filePath) => {
    const parts = filePath.split('.');
    return parts.length > 1 ? parts.pop() : ''; // Returns the extension or an empty string if none
  };

  // const openPermitHandler = async(filePath) => {
  //   let fileData = null;
  //   if (fileSrc === null) {
  //     fileData = await fetchFile(filePath); // Get the file URL and content type
  //   } else {
  //     fileData = { fileUrl: fileSrc, contentType: 'unknown' }; // Fallback for already loaded files
  //   }

  //   if (fileData && fileData.fileUrl) {
  //     console.log('Opening file:', fileData.fileUrl, 'Content-Type:', fileData.contentType);
      
  //     if (fileData.contentType.startsWith('image/')) {
  //       // Open image directly in a new tab
  //       window.open(fileData.fileUrl, '_blank');
  //     } else if (fileData.contentType === 'text/plain') {
  //       // Open plain text directly
  //       window.open(fileData.fileUrl, '_blank');
  //     } else {
  //       // Trigger download for other types
  //       const a = document.createElement('a');
  //       a.href = fileData.fileUrl;
  //       a.download = filePath.split('/').pop(); // Use the file name from the path
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //     }
  //   } else {
  //     console.error('File source not available');
  //   }
  // }

  const openPermitHandler = async (filePath) => {
    let fileData = null;

    if (fileSrc === null) {
      setLoadingFile(true); // Start download process
      fileData = await fetchFile(filePath);
      if (fileData && fileData.fileUrl) {
        setFileSrc(fileData.fileUrl);
      }
    } else {
      fileData = { fileUrl: fileSrc, contentType: 'unknown' };
    }

    // Use the fetched or cached file URL directly
    if (fileData && fileData.fileUrl) {
      console.log('Opening file:', fileData.fileUrl, 'Content-Type:', fileData.contentType);

      // Delay to ensure the file is ready
      setTimeout(() => {
        // Repeat download twice for reliability
        // for (let i = 0; i < 2; i++) {
          const a = document.createElement('a');
          a.href = fileData.fileUrl;
          a.download = filePath.split('/').pop();
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        // }
        setLoadingFile(false); // Reset downloading state
      }, 500); // Adjust the delay if necessary
    } else {
      console.error('File source not available');
      setLoadingFile(false);
    }
  };

  const handleUpdateClick = () => {
     // Convert object to string and encode it
     const encodedData = encodeURIComponent(JSON.stringify(data));
    
     // Pass the encoded string as a query parameter
     router.push(`/users/${companyId}/update-user?data=${encodedData}`);
  };

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

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
      <Title text='User Information'/>
      <div className='rounded-xl border-2 border-secondary bg-secondary w-full my-10 p-5 lg:p-10'>
        <div className='flex flex-row justify-center items-center gap-5 text-foreground font-bold'>
          <h1>Company: </h1>
          <div 
              className="flex flex-row items-center justify-between gap-2"
          >
            {/* <Image src={data.img} alt='user' className='h-[30px] w-[30px] rounded-full'/> */}
            <CompanyLogo logoUrl={data.logo} userName={data.companyName}/>
            <p className="text-left text-foreground font-light">{data.companyName}</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-start items-start w-full gap-5 text-textDefault my-5'>
        {/* lg:w-[50%] */}
          <div className='w-[100%] '>
            {/* <ContentComponent title='Company Name' value={data.companyName}/> */}
            <ContentComponent title='Organization Number' value={data.organizationNumber}/>
            <ContentComponent title='Name Of Responsible Person' value={data.nameOfResponsiblePerson}/>
            <ContentComponent title='Address' value={data.address}/>
            <ContentComponent title='Type Of Business' value={data.typeOfBusiness}/>
            <ContentComponent title='Email' value={data.email}/>
            <ContentComponent title='Phone Numer' value={data.phone}/>
            <ContentComponent title='Company File' 
                              icon={data.permit ?
                                    <Download
                                      onClick={() => openPermitHandler(data.permit)}
                                    /> :
                                    <p className='text-foreground mt-0 font-light'>No File Available</p>
                                    }  
                              isLoading={loadingFile}
            />
          </div>
        </div>
        <Pencil size={18} className='cursor-pointer' onClick={handleUpdateClick}
        />
      </div>
    </div>
    }
    </ProtectedRoute>
  )
}

export default UserInfoPage


