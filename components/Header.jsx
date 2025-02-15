'use client';

import React, { useContext } from 'react';
import { user } from '@/public/assets';
import Image from 'next/image';
import { Input } from './ui/input';
import { usePathname, useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import { ModeToggle } from './ModeToggle';
import { SIDEBAR_WIDTH, SidebarContext, SidebarTrigger, useSidebar } from './ui/sidebar';
import { House, Search } from 'lucide-react';
import IconComponent from './IconComponent';

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isFirstPage = pathname === '/';

  const { searchQuery, setSearchQuery } = useAppContext();
  const { open } = useContext(SidebarContext);
  const { isMobile } = useSidebar();
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const isSideBarOpen = open;
  
  return (
    <div>
      {!isFirstPage && (
        <div 
          className={`h-20 bg-background flex flex-row items-center justify-between 
                      py-5 px-2 md:px-5 fixed top-0 z-50
                      ${isMobile ? 'w-full' : isSideBarOpen ? 'md:flex' : 'w-full'}`}
          style={isMobile ? {} : isSideBarOpen ? { width: `calc(100% - ${SIDEBAR_WIDTH})` } : {}}
        >
          <div className="flex flex-row items-center justify-center gap-1 md:gap-2 text-foreground">
            <SidebarTrigger />
            <div onClick={() => router.push('/main')}>
              <IconComponent icon={<House size={18}/>} tooltip='Home' />
            </div>
            <div //
              // className="flex items-center justify-end rounded-xl bg-background text-foreground border border-secondary h-9 hover:bg-secondary shadow-sm"
              className="flex items-center justify-end rounded-xl bg-background text-foreground h-9 transition-all hover:bg-secondary hover:shadow-md hover:shadow-black/30 border border-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer shadow-sm"
            >
              <Search size={20} className='ml-2'/>
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
            <div className='flex flex-row'>
              <Image src={user} alt="user" className="h-[42px] w-[42px] rounded-full" />
              <div className='flex flex-col ml-2 justify-center'>
                <p className='hidden md:block text-[12px] font-normal'>Admin</p>
                <p className='hidden md:block text-[10px] font-medium text-textPrimary'>Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
