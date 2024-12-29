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
      
    fetchLogo();
  }, [logoUrl]);

  return logoSrc ? 
          <Image src={logoSrc} alt="Company Logo" width={50} height={50} className='h-[50px] w-[50px] rounded-full'/> 
          : 
           // Spinner
           <div>
            <div className="w-5 h-5 border-2 border-[#FECC02] border-t-transparent rounded-full animate-spin"></div>
           </div>
           
};

export default CompanyLogo;
