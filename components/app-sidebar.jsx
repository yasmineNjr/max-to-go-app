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
  SidebarRail,
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
          <SidebarHeader className='flex flex-row z-25 bg-secondary' >
            <Image src={logo} alt='logo' className='my-3 h-[30px] w-[30px]'/>
            <div className="flex flex-col items-start justify-center text-[12px]">
              <h1 className="text-[#6e37d3]">MaxToGo</h1>
              <p className="text-[#957be2]">Grow Smart & Sustainably</p>
            </div>
          </SidebarHeader>
          {/* to hide scroll */}
          <SidebarContent  className='bg-secondary overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-textPrimary scrollbar-track-transparent '>
            {
              sidebarItems.map((item) => (
                <SidebarGroup key={item.category}>
                  <div className="text-[12px] text-textPrimary">{item.category}</div>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {
                        item.items.map((it) => (
                          <SidebarMenuItem key={item.category} className="w-full">
                            <SidebarMenuButton asChild  onClick={(e) => activePathHandler(e, it.url)} 
                                                        className= 'cursor-pointer hover:bg-background'>
                              <div  className="flex flex-row items-center w-full justify-between" >
                                <div key={it.title} className='flex flex-row gap-2 items-center'>
                                  <div>{it.icon}</div>
                                  <span>{it.title}</span>
                                </div>
                                {
                                  it.items && it.items.length > 0 ? (
                                    <div className="flex items-center justify-center w-4">
                                      <ChevronRight
                                        onClick={(e) => openSubMenuHandler(e, item.title)}
                                        className="cursor-pointer transition-transform duration-500"
                                        style={{
                                          transform: openItem === item.title ? "rotate(90deg)" : "rotate(0deg)",
                                        }}
                                      />
                                    </div>
                                    ) : 
                                    null
                                }
                              </div>
                            </SidebarMenuButton>
                            {
                              it.items && it.items.length > 0 && openItem === item.title && 
                              <div
                                  className={`transition-all duration-600 ease-in-out border-l ml-5 border-foreground ${
                                    openItem === item.title ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                  } overflow-hidden`}
                              >
                                {
                                it.items.map((sitem, idx) => (
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
                        ))
                      }
                       
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))
            }
            
          </SidebarContent>
          {
            <SidebarFooter className='bg-secondary'>
              {/* <Image src={logo} alt='logo'/> */}
              {/* <p className="text-sidebar-accent">xxxxxxx</p> */}
            </SidebarFooter>
          }
          <SidebarRail />
        </Sidebar>
      }
      
    </div>
    
  )
}

export default AppSidebar

{/* <SidebarMenu>
{sidebarItems.map((item) => (
  <SidebarMenuItem key={item.category}>
    <SidebarMenuButton asChild onClick={(e) => activePathHandler(e, item.url)} className= 'cursor-pointer hover:bg-background'>
      <div  className="flex flex-row items-center w-full justify-between" >
        <div className='flex flex-row items-center justify-center gap-2'>
          <div>{item.icon}</div>
          <span>{item.title}</span>
        </div>
        {
          // item.items.length > 0 ? 
          item.title === 'Core Tasks' ?
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
</SidebarMenu> */}