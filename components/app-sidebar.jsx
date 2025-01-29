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
import { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronRight } from "lucide-react";

const AppSidebar = () => {

  const router = useRouter();
  const pathname = usePathname();
  const isFirstPage = pathname === '/';
  const [activePath, setActivePath] = useState('/');
  const { toggleSidebar, isMobile } = useSidebar();

  const [openItem, setOpenItem] = useState(null); // Track the currently open item
  
  const openSubMenuHandler = (e, title) => {
    e.preventDefault(); // Prevent the default anchor behavior
    e.stopPropagation(); // Stop the event from bubbling to parent elements
    setOpenItem((prev) => (prev === title ? null : title)); // Toggle the open item
    console.log(title)
  };
  const activePathHandler = (e, url) => {
    if(url){
      e.preventDefault(); // Prevent navigation for the demo
      setActivePath(url); // Update the string state
      isMobile ? toggleSidebar() :  console.log('desktop')
      router.push(url);
    }
   
  }

  const itemNavigateHandler = (url) => {
    setActivePath(url);
    router.push(url);
  }

  return (
    <div>
      {
        !isFirstPage &&
        <Sidebar className=''>
          <SidebarHeader className='flex items-center z-25 bg-secondary' >
            <Image src={logo} alt='logo' className='m-5 h-[120px] w-[120px]'/>
          </SidebarHeader>
          {/* to hide scroll */}
          <SidebarContent  className='bg-secondary overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-secondary scrollbar-track-transparent '>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild onClick={(e) => activePathHandler(e, item.url)} className= 'cursor-pointer hover:bg-background'>
                        <div  className="flex flex-row items-center w-full justify-between" >
                          <div className='flex flex-row items-center justify-center gap-2'>
                            <div>{item.icon}</div>
                            <span>{item.title}</span>
                          </div>
                          {
                            item.items.length > 0 ? 
                              <ChevronRight onClick={(e) => openSubMenuHandler(e, item.title)} 
                                              className="cursor-pointer inline-block transition-transform duration-500" 
                                              style={{
                                                transform: openItem === item.title ? "rotate(90deg)" : "rotate(0deg)", // Rotate based on openItem
                                              }}/>
                              : 
                              <></>
                          }
                        </div>
                      </SidebarMenuButton>
                      {
                        item.items.length > 0 && openItem === item.title && 
                        <div
                            className={`transition-all duration-600 ease-in-out border-l ml-5 border-foreground ${
                              openItem === item.title ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            } overflow-hidden`}
                        >
                          {
                          item.items.map((sitem, idx) => (
                            < div className={`h-9 px-2 rounded-xl flex flex-row items-center justify-between hover:hover:bg-background cursor-pointer  border-foreground ml-3 mr-3`}
                                onClick={() => itemNavigateHandler(sitem.url)}
                                >
                              <div className='flex flex-row items-center justify-center gap-2'>
                                {sitem.icon && sitem.icon}
                                <p  key={sitem.title}> {sitem.title} </p>
                              </div>
                              {sitem.count && <p>{sitem.count}</p>}
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
            <SidebarFooter className='bg-secondary'>
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
