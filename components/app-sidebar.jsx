'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { logo, menu } from "@/public/assets"
import Image from "next/image"
import { sidebarItems, sidebarSubItems } from "@/constants"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { useSidebar } from "@/components/ui/sidebar";

export function AppSidebar() {

  const router = useRouter();
  const pathname = usePathname();
  const isFirstPage = pathname === '/';
  const [isOpenTasks, setIsOpenTasks] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const styleActive = 'bg-secondaryColor text-primaryColor';
  const styleInActive = 'bg-primaryColor text-secondaryColor';
  const styleSubItemActive = 'text-secondaryColor';
  const styleSubItemInActive = 'text-textDefault';
  const { toggleSidebar, isMobile } = useSidebar();
  
  const openTasksHandler = (e) => {
    e.preventDefault(); // Prevent the anchor tag's default behavior
    e.stopPropagation(); // Prevent the event from bubbling to the parent
    setIsOpenTasks((prevState) => !prevState);
  }

  const activePathHandler = (e, url) => {
    if(url){
      e.preventDefault(); // Prevent navigation for the demo
      setActivePath(url); // Update the string state
      isMobile ? toggleSidebar() :  console.log('desktop')
      router.push(url);
    }
   
  }

  const taskItemNavigateHandler = (url) => {
    setActivePath(url);
    router.push(url);
  }

  return (
    <div>
      {
        !isFirstPage &&
        <Sidebar className=''>
          <SidebarHeader  className='z-25 bg-primaryColor flex flex-row justify-center items-center gap-6 h-[50px]'>
            <Image src={menu} alt='menu' className='w-5'/>
            <h3 className='text-textDefault'>Main Menu</h3>
          </SidebarHeader>
          <SidebarContent  className='bg-primaryColor pl-5'>
            <SidebarGroup>
              {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild onClick={(e) => activePathHandler(e, item.url)} 
                                          className={`${activePath === item.url ? styleActive : styleInActive} border border-secondaryColor rounded-xl hover:bg-secondaryColor hover:text-primaryColor`}>
                        <div  className="flex flex-row items-center justify-between w-full"  
                            // href={item.url} 
                            >
                          <div className='flex flex-row items-center justify-center gap-1'>
                            {/* <item.icon className="w-4 h-4"/> */}
                            {item.icon}
                            <span>{item.title}</span>
                          </div>
                          {
                            item.title === 'Tasks' ? isOpenTasks ? 
                              <IoIosArrowUp onClick={openTasksHandler}/> : 
                              <IoIosArrowDown onClick={openTasksHandler}/> : 
                              <></>
                          }
                        </div>
                      </SidebarMenuButton>
                      {
                        item.title === 'Tasks' && isOpenTasks && sidebarSubItems.map((sitem, idx) => (
                          <p  key={sitem.title} 
                              onClick={() => taskItemNavigateHandler(sitem.url)}
                              className={`${activePath === sitem.url ? styleSubItemActive : styleSubItemInActive} cursor-pointer ${idx !== sidebarSubItems.length-1 ? 'border-b' : ''}  border-secondaryColor mt-2 ml-3 mr-3`}>
                            {sitem.title}
                          </p>
                        ))
                      }
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          {
            !isOpenTasks &&
            <SidebarFooter  className='bg-primaryColor'>
              <Image src={logo} alt='logo'/>
            </SidebarFooter>
          }
          
        </Sidebar>
      }
      
    </div>
    
  )
}
