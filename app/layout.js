import localFont from "next/font/local";
import "./globals.css";
import Header from '../components/Header'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata = {
  title: "MaxToGo App",
  description: "",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full bg-black text-textDefault">
            <Header/>
            <SidebarTrigger className='text-secondaryColor w-10 h-10 hover:bg-transparent hover:text-secondaryColor'/>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
