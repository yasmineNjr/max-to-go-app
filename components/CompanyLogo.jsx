import { user } from '@/public/assets';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { abbreviateUserName } from '@/constants';

const CompanyLogo = ({ logoUrl, userName }) => {
  
  const [logoSrc, setLogoSrc] = useState('');

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

  return (
    <div className="relative inline-block ">
      <Avatar className='ring-2 ring-transparent hover:ring-secondary/50 transition-[box-shadow]'>
        <AvatarImage src={logoSrc} className={'object-cover'}/>
        <AvatarFallback className='font-medium text-sm bg-background'>{abbreviateUserName(userName)}</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green ring-1 ring-white"></span>
    </div>
  )
};

export default CompanyLogo;
