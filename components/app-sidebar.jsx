'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarMenuSub,
  // SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import { logo, menu } from "@/public/assets"
import Image from "next/image"
import { sidebarItems, sidebarSubItems } from "@/constants"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { useSidebar } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const AppSidebar = () => {

  const router = useRouter();
  const pathname = usePathname();
  const isFirstPage = pathname === '/';
  const [isOpenTasks, setIsOpenTasks] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const styleActive = 'bg-secondary text-primary';
  const styleInActive = 'bg-primary text-secondary';
  const styleSubItemActive = 'text-secondary-foreground hover:bg-primary'
  const styleSubItemInActive = 'text-secondary-foreground';
  const { toggleSidebar, isMobile } = useSidebar();
  
  const openTasksHandler = (e) => {
    e.preventDefault(); // Prevent the anchor tag's default behavior
    e.stopPropagation(); // Prevent the event from bubbling to the parent
    setIsOpenTasks((prevState) => !prevState);
    setIsRotated(!isRotated);
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
          <SidebarHeader className='flex items-center z-25' >
            <Image src={logo} alt='logo' className='m-1 h-[60px] w-[60px]'/>
          </SidebarHeader>
          {/* to hide scroll */}
          <SidebarContent  className='pl-5 overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-secondary scrollbar-track-transparent '>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>

                  {sidebarItems.map((item) => (
                   
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild onClick={(e) => activePathHandler(e, item.url)} className= 'cursor-pointer'>
                        <div  className="flex flex-row items-center gap-32 w-full" >
                          <div className='flex flex-row items-center justify-center gap-1'>
                            {item.icon}
                            <span>{item.title}</span>
                          </div>
                          {
                            item.title === 'Tasks' ? 
                              <IoIosArrowDown onClick={openTasksHandler} 
                                              className="cursor-pointer inline-block transition-transform duration-500" 
                                              style={{transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",}}/>
                              : 
                              <></>
                          }
                        </div>
                      </SidebarMenuButton>
                      {
                        item.title === 'Tasks' && isOpenTasks && 
                        <div
                          className={`transition-all duration-600 ease-in-out ${
                            isOpenTasks ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          {
                          sidebarSubItems.map((sitem, idx) => (
                          < div className={`px-2 rounded-xl flex flex-row justify-between hover:bg-secondary cursor-pointer ${idx !== sidebarSubItems.length-1 ? 'border-b' : ''}  border-secondary mt-2 ml-3 mr-3`}>
                            <p  key={sitem.title} 
                              onClick={() => taskItemNavigateHandler(sitem.url)}
                              className=''>
                              {sitem.title}
                            </p>
                            <p>{sitem.count}</p>
                          </div>
                        ))
                      }
                      </div>
                      }
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          {
            <SidebarFooter  className=''>
              {/* <Image src={logo} alt='logo'/> */}
              {/* <p className="text-sidebar-accent">xxxxxxx</p> */}
            </SidebarFooter>
          }
          
        </Sidebar>
      }
      
    </div>
    
  )
}

export default AppSidebar
