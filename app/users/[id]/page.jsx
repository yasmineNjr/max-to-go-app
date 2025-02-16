'use client'

import styles from '@/app/styles'
import Title from '@/components/Title'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { abbreviateUserName, actionTypes, businessTypes, countries, Field } from '@/constants'
import { user } from '@/public/assets'
import { BadgeCheck, Download, Hourglass, Pencil } from 'lucide-react'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import IconComponent from '@/components/IconComponent';

const UserInfoPage = ({ params }) => {

  // const user = users.find((user) => user.name === params.id);
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fileSrc, setFileSrc] = useState(null);
  const [loadingFile, setLoadingFile] = useState(false);
  const [errorFile, setErrorFile] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const router = useRouter();
  const companyId = params.id;
  
  useEffect(() => {
    
    fetchCompanyById();
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);

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
      // console.log('Content-Type:', contentType);
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
      <div className='flex flex-col gap-4 animate-appear'>
          {/* Title Section */}
          <span className='flex justify-between items-center'>
            <h1 className={'text-lg font-bold '}>MyProfile</h1>
            <Button variant={'outline'} asChild 
              className='text-muted-foreground'
              onClick={handleUpdateClick}
              >
              {/* <Link href={'profile/edit'}>Edit<Pencil/></Link> */}
              <span>Edit<Pencil/></span>
            </Button>
            </span>
            {/* Profile Info Section */}
            <section className={`flex flex-col sm:flex-row items-center gap-4 ${styles.sectionStyles}`}>
                <Avatar className='size-20'>
                    <AvatarImage src={data.logo} className={'object-cover'}/>
                    <AvatarFallback
                        className='font-medium text-lg bg-primary text-primary-foreground'>{abbreviateUserName(data.companyName)}</AvatarFallback>
                </Avatar>
                <div className={'flex flex-col gap-1 text-center sm:text-left'}>
                    <p className="text-lg font-bold flex items-center justify-center sm:justify-start gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                {!data.isApproval ? <Hourglass className='text-amber-400'/> :
                                    <BadgeCheck className='text-green-400'/>}
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{data.isApproval ? 'Approved' : 'Pending'}</p>
                            </TooltipContent>
                        </Tooltip>
                        {data.companyName}
                    </p>
                    <p className="text-muted-foreground break-all">{data.email}</p>
                    <p className="text-muted-foreground text-sm">
                        <span className={'text-base font-medium'}>0</span>TotalOrders
                    </p>
                </div>
            </section>
             {/* Personal Info Section */}
             <section className={`${styles.sectionStyles}`}>
              <h4 className={'text-lg font-bold mb-6'}>Personal Information</h4>
              <div className={'flex flex-col justify-start content-start gap-y-6 gap-x-28 flex-wrap md:h-32'}>
                  <Field label='Full Name' value={data.companyName}/>
                  <Field label='Email' value={data.email}/>
                  <Field label='Phone' value={data.phone}/>
              </div>
            </section>
             {/* Company Info Section */}
             <section className={`${styles.sectionStyles}`}>
                <h4 className={'text-lg font-bold mb-6'}>Company Information</h4>
		            <div className={'flex flex-col justify-start content-start gap-y-6 gap-x-28 flex-wrap sm:h-56 xl:h-32'}>
                    <Field label='Country'
                           value={countries.find(type => type.value.toString() === data.address).label}/>
                    <Field label='Organization Number' value={data.organizationNumber}/>
                    <Field label='Responsible Person' value={data.nameOfResponsiblePerson}/>
                    <Field label='Business Type'
                           value={businessTypes.find(type => type.value == data.typeOfBusiness)?.text}/>
                    <Field label='Buy/Sell'
                           value={actionTypes.find(type => type.value == data.typeOfActions)?.text}/>
                    <Field label='Permit File'
                           value={data.permit ? 
                                  <Download
                                    onClick={() => openPermitHandler(data.permit)}
                                  /> : 'No Permit File'}/>
                </div>
            </section>
          </div>
    </div>
    }
    </ProtectedRoute>
  )
}

export default UserInfoPage




// 'use client'

// import styles from '@/app/styles'
// import Button from '@/components/Button';
// import ContentComponent from '@/components/ContentComponent';
// import Title from '@/components/Title'
// import React, { useEffect, useState } from 'react'
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PDFDocument from '@/components/PDFDocument';
// import { useRouter, useSearchParams } from 'next/navigation';
// import axios from 'axios';
// import CompanyLogo from '@/components/CompanyLogo';
// import ProtectedRoute from '@/components/ProtectedRoute';
// import { Download, Pencil } from 'lucide-react';

// const UserInfoPage = ({ params }) => {

//   // const user = users.find((user) => user.name === params.id);
  
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [fileSrc, setFileSrc] = useState(null);
//   const [loadingFile, setLoadingFile] = useState(false);
//   const [errorFile, setErrorFile] = useState(null);
//   const [currentDate, setCurrentDate] = useState('');
//   const searchParams = useSearchParams();
//   const source = searchParams.get("source");
//   const router = useRouter();
//   const companyId = params.id;
  
//   useEffect(() => {
    
//     fetchCompanyById();
//     const today = new Date();
//     const formattedDate = today.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//     setCurrentDate(formattedDate);

//   }, []);

//   const fetchCompanyById = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve token from localStorage or context
//       if (!token) {
//         console.error('No token available');
//         return;
//       }
  
//       const response = await axios.get('/api/get-by-id', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params: {
//           companyId, // Pass companyId as a query parameter
//         },
//       });
  
//       // console.log('Company Data:', response.data.data);
//       setData(response.data.data);
//       //await fetchPermit(response.data.data.permit);
//       return response.data; // Process the data as needed
//     } catch (error) {
//       console.error('Error fetching company by ID:', error.response?.data || error.message);
//       setError(error.response?.data || error.message)
//     } finally {
//       setLoading(false); // Set loading to false after fetching
//     }
//   };

//   const fetchFile = async (filePath) => {
//     try {
//       setLoadingFile(true);
//       const token = localStorage.getItem('token'); // Get token from localStorage
//       if (!token) {
//         setError('No token available');
//         return;
//       }
  
//       // Sanitize and encode the file path
//       // const sanitizedFilePath = filePath.replace(/\\/g, '/');
//       const encodedFilePath = encodeURIComponent(filePath);
  
//       // Make a request to the internal API that will forward the request to the external API
//       const response = await axios.get(`/api/get-file?filePath=${encodedFilePath}`, {
//         headers: {
//           'Authorization': `Bearer ${token}`, // Include the token in the request header
//           'Accept': '*/*',
//         },
//         responseType: 'blob', // Expect binary data
//       });
  
//       if (response.status !== 200) {
//         throw new Error(`Failed to fetch file: ${response.statusText}`);
//       }
//       const contentType = response.headers.get('Content-Type');
//       // console.log('Content-Type:', contentType);
//       const fileUrl = URL.createObjectURL(response.data);
//       // console.log('Generated file URL:', fileUrl);
//       setFileSrc(fileUrl); // Update state
//     } catch (error) {
//       console.error('Error fetching file:', error);
//       setErrorFile('An error occurred while fetching the file.');
//     } finally {
//       setLoadingFile(false);
//     }
//   };
  
//   const getFileExtension = (filePath) => {
//     const parts = filePath.split('.');
//     return parts.length > 1 ? parts.pop() : ''; // Returns the extension or an empty string if none
//   };

//   // const openPermitHandler = async(filePath) => {
//   //   let fileData = null;
//   //   if (fileSrc === null) {
//   //     fileData = await fetchFile(filePath); // Get the file URL and content type
//   //   } else {
//   //     fileData = { fileUrl: fileSrc, contentType: 'unknown' }; // Fallback for already loaded files
//   //   }

//   //   if (fileData && fileData.fileUrl) {
//   //     console.log('Opening file:', fileData.fileUrl, 'Content-Type:', fileData.contentType);
      
//   //     if (fileData.contentType.startsWith('image/')) {
//   //       // Open image directly in a new tab
//   //       window.open(fileData.fileUrl, '_blank');
//   //     } else if (fileData.contentType === 'text/plain') {
//   //       // Open plain text directly
//   //       window.open(fileData.fileUrl, '_blank');
//   //     } else {
//   //       // Trigger download for other types
//   //       const a = document.createElement('a');
//   //       a.href = fileData.fileUrl;
//   //       a.download = filePath.split('/').pop(); // Use the file name from the path
//   //       document.body.appendChild(a);
//   //       a.click();
//   //       document.body.removeChild(a);
//   //     }
//   //   } else {
//   //     console.error('File source not available');
//   //   }
//   // }

//   const openPermitHandler = async (filePath) => {
//     let fileData = null;

//     if (fileSrc === null) {
//       setLoadingFile(true); // Start download process
//       fileData = await fetchFile(filePath);
//       if (fileData && fileData.fileUrl) {
//         setFileSrc(fileData.fileUrl);
//       }
//     } else {
//       fileData = { fileUrl: fileSrc, contentType: 'unknown' };
//     }

//     // Use the fetched or cached file URL directly
//     if (fileData && fileData.fileUrl) {
//       console.log('Opening file:', fileData.fileUrl, 'Content-Type:', fileData.contentType);

//       // Delay to ensure the file is ready
//       setTimeout(() => {
//         // Repeat download twice for reliability
//         // for (let i = 0; i < 2; i++) {
//           const a = document.createElement('a');
//           a.href = fileData.fileUrl;
//           a.download = filePath.split('/').pop();
//           document.body.appendChild(a);
//           a.click();
//           document.body.removeChild(a);
//         // }
//         setLoadingFile(false); // Reset downloading state
//       }, 500); // Adjust the delay if necessary
//     } else {
//       console.error('File source not available');
//       setLoadingFile(false);
//     }
//   };

//   const handleUpdateClick = () => {
//      // Convert object to string and encode it
//      const encodedData = encodeURIComponent(JSON.stringify(data));
    
//      // Pass the encoded string as a query parameter
//      router.push(`/users/${companyId}/update-user?data=${encodedData}`);
//   };

//   // if (loading) return <p>Loading...</p>;
//   if (error) return <p>Something went wrong!</p>;

//   return (
//     <ProtectedRoute>
//     {
//     loading ? 
//      // Spinner
//      <div className={`${styles.mainSection} flex items-center justify-center h-screen`}>
//         <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
//      </div>
//      :
//     <div className={`${styles.mainSection}`}>
//       <Title text='User Information'/>
//       <div className='rounded-xl border-2 border-secondary bg-secondary w-full my-10 p-5 lg:p-10'>
//         <div className='flex flex-row justify-center items-center gap-5 text-foreground font-bold'>
//           <h1>Company: </h1>
//           <div 
//               className="flex flex-row items-center justify-between gap-2"
//           >
//             {/* <Image src={data.img} alt='user' className='h-[30px] w-[30px] rounded-full'/> */}
//             <CompanyLogo logoUrl={data.logo} userName={data.companyName}/>
//             <p className="text-left text-foreground font-light">{data.companyName}</p>
//           </div>
//         </div>

//         <div className='flex flex-col lg:flex-row justify-start items-start w-full gap-5 text-textDefault my-5'>
//         {/* lg:w-[50%] */}
//           <div className='w-[100%] '>
//             {/* <ContentComponent title='Company Name' value={data.companyName}/> */}
//             <ContentComponent title='Organization Number' value={data.organizationNumber} style='w-[35%]'/>
//             <ContentComponent title='Name Of Responsible Person' value={data.nameOfResponsiblePerson} style='w-[35%]'/>
//             <ContentComponent title='Address' value={data.address} style='w-[35%]'/>
//             <ContentComponent title='Type Of Business' value={data.typeOfBusiness} style='w-[35%]'/>
//             <ContentComponent title='Email' value={data.email} style='w-[35%]'/>
//             <ContentComponent title='Phone Numer' value={data.phone} style='w-[35%]'/>
//             <ContentComponent title='Creation Date' value={currentDate} style='w-[35%]'/>
//             <ContentComponent title='Company File' 
//                               icon={data.permit ?
//                                     <Download
//                                       onClick={() => openPermitHandler(data.permit)}
//                                     /> :
//                                     <p className='text-foreground mt-0 font-light'>No File Available</p>
//                                     }  
//                               isLoading={loadingFile} style='w-[35%]'
//             />
//           </div>
//         </div>
//         <Pencil size={18} className='cursor-pointer' onClick={handleUpdateClick}
//         />
//       </div>
//     </div>
//     }
//     </ProtectedRoute>
//   )
// }

// export default UserInfoPage


