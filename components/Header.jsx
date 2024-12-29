'use client';

import React from 'react';
import { search, user } from '@/public/assets';
import Image from 'next/image';
import { Input } from './ui/input';
import { usePathname } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

const Header = () => {
  const pathname = usePathname();
  const isFirstPage = pathname === '/';

  const { searchQuery, setSearchQuery } = useAppContext();
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {!isFirstPage && (
        <div className="w-full h-20 bg-primaryColor rounded-b-2xl flex flex-row items-center justify-between p-5">
          <div className="flex flex-row items-center justify-center gap-2">
            <Image src={user} alt="user" className="h-[50px] w-[50px] rounded-full" />
            <h3>Welcome Back Admin</h3>
          </div>

          <div className="flex justify-end ml-5 rounded-2xl border border-textPrimary bg-textDefault">
            <Image
              src={search}
              alt="user"
              width={24}
              height={24}
              className="mr-1 ml-2 bg-transparent"
            />
            <Input
              placeholder="Search..."
              className="shad-input border-0 text-textPrimary"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

// 'use client'

// import { search, user } from '@/public/assets'
// import Image from 'next/image'
// import React from 'react'
// import { Input } from './ui/input'
// import { usePathname } from 'next/navigation'
// import { useAppContext } from '@/context/AppContext'

// const Header = () => {

//   const pathname = usePathname();
//   const isFirstPage = pathname === '/';
//   const { searchQuery, setSearchQuery } = useAppContext();
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };
//   return (
//     <div>
//       {
//         !isFirstPage &&
//           <div className='w-full h-20 bg-primaryColor rounded-b-2xl flex flex-row items-center justify-between p-5'>
//             <div className='flex flex-row items-center justify-center  gap-2'>
//               <Image src={user} alt='user' className='h-[50px] w-[50px] rounded-full'/>
//               <h3>Welcome Back Admin</h3>
//             </div>
            
//             <div className='flex justify-end ml-5 rounded-2xl border border-textPrimary bg-textDefault'>
//               <Image
//                   src={search}
//                   alt='user'
//                   width={24}
//                   height={24}
//                   className="mr-1 ml-2 bg-transparent"
//               />
//               <Input
//                 placeholder='Search...'
//                 className="shad-input border-0 text-textPrimary"
//                 onChange={handleSearchChange}
//               />
//             </div>
          
//         </div>
//       }
//     </div>
    
//   )
// }

// export default Header