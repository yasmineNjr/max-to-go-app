import localFont from "next/font/local";
import dynamic from "next/dynamic";
import "./globals.css";
// import Header from '../components/Header'
const Header = dynamic( 
  () => import('../components/Header'),
  {
    loadingTable: () => <p className='text-secondaryColor'>Loading...</p>
  })
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AppSidebar = dynamic( 
  () => import('@/components/app-sidebar'),
  {
    loadingTable: () => <p className='text-secondaryColor'>Loading...</p>
  })
import { AppProvider } from "@/context/AppContext";

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
            <AppProvider>
              <Header/>
              <SidebarTrigger className='text-secondaryColor w-7 h-7 hover:bg-transparent hover:text-secondaryColor'/>
              {children}
            </AppProvider>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
