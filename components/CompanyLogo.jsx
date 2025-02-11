import { user } from '@/public/assets';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CompanyLogo = ({ logoUrl }) => {
  
  const [logoSrc, setLogoSrc] = useState('');
//   console.log('logoUrl:', logoUrl);

  useEffect(() => {
    const fetchLogo = async () => {
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            console.error('No token available');
            return;
          }
      
          const sanitizedLogoUrl = logoUrl.replace(/\\/g, '/'); // Replace backslashes
          const encodedLogoUrl = encodeURIComponent(sanitizedLogoUrl);
        //   console.log('Sanitized and encoded logoUrl:', `/api/proxy/logo?logoUrl=${encodedLogoUrl}`);

          const response = await fetch(`/api/proxy/logo?logoUrl=${encodedLogoUrl}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          if (!response.ok) {
            console.error(`Failed to fetch logo: ${response.status} ${response.statusText}`);
            return;
          }
      
          const blob = await response.blob();
          const logoSrc = URL.createObjectURL(blob);
          setLogoSrc(logoSrc); // Set the logo source in your component
        } catch (error) {
          console.error('Error fetching logo:', error);
        }
      };
      
    // const fetchLogo = async () => {
    //   try {
    //     // Replace backslashes in the URL if necessary
    //     const sanitizedLogoUrl = logoUrl.replace(/\\/g, '/'); // Replace backslashes
    //     const encodedLogoUrl = encodeURIComponent(sanitizedLogoUrl);
    
    //     // Fetch the logo
    //     const response = await fetch(`/api/proxy/logo?logoUrl=${encodedLogoUrl}`);
        
    //     if (!response.ok) {
    //       console.error(`Failed to fetch logo: ${response.status} ${response.statusText}`);
    //       return;
    //     }
    
    //     // Convert the response to a Blob and create an object URL
    //     const blob = await response.blob();
    //     const logoSrc = URL.createObjectURL(blob);
    //     setLogoSrc(logoSrc); // Set the logo source in your component
    //   } catch (error) {
    //     console.error('Error fetching logo:', error);
    //   }
    // };
    fetchLogo();
  }, [logoUrl]);

  return logoSrc ? 
          <div className="relative inline-block ">
            <Image 
              src={logoSrc} 
              alt="Company Logo" 
              width={50} 
              height={50} 
              className="h-[50px] w-[50px] rounded-full"
            />
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green ring-2 ring-white"></span>
          </div>
          : 
          // Spinner
          // <div>
          // <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          // </div>
          <div className="relative inline-block ">
            <Image 
              src={user} 
              alt="Company Logo" 
              width={50} 
              height={50} 
              className="h-[50px] w-[50px] rounded-full"
            />
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green ring-2 ring-white"></span>
          </div>
           
};

export default CompanyLogo;
