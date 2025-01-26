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
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "MaxToGo App",
  description: "",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
          <SidebarProvider>
            <AppSidebar />
            <main className="w-full bg-background">
              <AppProvider>
                <Header/>
                <SidebarTrigger className='w-7 h-7 hover:bg-transparent m-1'/>
                {/* className=' text-secondary w-7 h-7 hover:bg-transparent hover:text-secondary' */}
                {children}
              </AppProvider>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
