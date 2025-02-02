'use client';

import React from 'react';
import { user } from '@/public/assets';
import Image from 'next/image';
import { Input } from './ui/input';
import { usePathname, useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import { ModeToggle } from './ModeToggle';
import { SidebarTrigger } from './ui/sidebar';
import { House, Search } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isFirstPage = pathname === '/';

  const { searchQuery, setSearchQuery } = useAppContext();
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {!isFirstPage && (
        <div className="w-full h-20 bg-secondary rounded-b-2xl flex flex-row items-center justify-between p-5 shadow-sm ">          
          <div className="flex flex-row items-center justify-center gap-1 md:gap-2 text-foreground">
            <SidebarTrigger />
            <div 
                className='w-9 h-9 text-foreground bg-transparent rounded-md p-2 transition-colors hover:bg-background border border-card focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer'
                onClick={() => router.push('/main')}>
              <House size={18}/>
            </div>
            <div className="flex items-center justify-end rounded-xl bg-background text-foreground border border-card h-9 hover:bg-secondary  shadow-sm">
              <Search className='m-2'/>
              <Input
                placeholder="Search..."
                className="shad-input w-32 md:w-36"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>

          <div className='flex flex-row items-center justify-center gap-1 md:gap-2'>   
            <ModeToggle/>
            <div className='flex flex-col'>
              <Image src={user} alt="user" className="h-[45px] w-[45px] rounded-full" />
              {/* <span className='hidden md:block text-sm font-medium'>Admin</span> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
