'use client'

import styles from '@/app/styles'
import Button from '@/components/Button';
import ContentComponent from '@/components/ContentComponent';
import Title from '@/components/Title'
import React, { useEffect, useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from '@/components/PDFDocument';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import CompanyLogo from '@/components/CompanyLogo';
import ProtectedRoute from '@/components/ProtectedRoute';
import { FaDownload } from "react-icons/fa";

const UserInfoPage = ({ params }) => {

  // const user = users.find((user) => user.name === params.id);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        //await fetchPermit(response.data.data.permit);
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

  const [fileSrc, setFileSrc] = useState(null);
  const [loadingFile, setLoadingFile] = useState(false);
  const [errorFile, setErrorFile] = useState(null);

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

  const openPermitHandler = async(filePath) => {
    let fileData = null;
    if (fileSrc === null) {
      fileData = await fetchFile(filePath); // Get the file URL and content type
    } else {
      fileData = { fileUrl: fileSrc, contentType: 'unknown' }; // Fallback for already loaded files
    }

    if (fileData && fileData.fileUrl) {
      console.log('Opening file:', fileData.fileUrl, 'Content-Type:', fileData.contentType);
      
      if (fileData.contentType.startsWith('image/')) {
        // Open image directly in a new tab
        window.open(fileData.fileUrl, '_blank');
      } else if (fileData.contentType === 'text/plain') {
        // Open plain text directly
        window.open(fileData.fileUrl, '_blank');
      } else {
        // Trigger download for other types
        const a = document.createElement('a');
        a.href = fileData.fileUrl;
        a.download = filePath.split('/').pop(); // Use the file name from the path
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } else {
      console.error('File source not available');
    }
  }
  

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <ProtectedRoute>
    {
    loading ? 
     // Spinner
     <div className={`${styles.mainSection} mt-25 flex items-center `}>
        <div className="w-10 h-10 border-2 border-[#FECC02] border-t-transparent rounded-full animate-spin"></div>
     </div>
     :
    <div className={`${styles.mainSection}`}>
      <Title text='User Information'/>
      <div className='rounded-xl border-2 border-textPrimary bg-blue-400 w-full my-10 p-5 lg:p-10'>
        <div className='flex flex-row justify-center items-center gap-5 text-textDefault'>
          <h3>User: </h3>
          <div 
              className="flex flex-row items-center justify-between gap-2"
          >
            {/* <Image src={user} alt='user' className='h-[30px] w-[30px] rounded-full'/> */}
            <CompanyLogo logoUrl={data.logo}/>
            <p className="text-left text-textDefault font-light">{data.companyName}</p>
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
            <ContentComponent title='Info : ' 
                              icon={<FaDownload size={20} 
                                                onClick={() => openPermitHandler(data.permit)}
                                    />}  
                              isLoading={loadingFile}
            />
            {/* value={data.permit.split('\\').pop()} */}
          </div>
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
    }
    </ProtectedRoute>
  )
}

export default UserInfoPage


