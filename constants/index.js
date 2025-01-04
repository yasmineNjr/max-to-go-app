import { ad1, ad2, ad3, user } from "@/public/assets"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { HiTruck } from "react-icons/hi2";
import { FaTasks } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { BiSolidConversation } from "react-icons/bi";
import { FaFileArchive } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdTask } from "react-icons/md";

export const FormFieldType = {
   INPUT: 'input',
   TEXTAREA: 'textarea',
   PHONE_INPUT: 'phoneInput',
   CHECKBOX: 'checkbox',
   DATE_PICKER: 'datePicker',
   SELECT: 'select',
   SKELETON: 'skeleton',
 };

export const sidebarItems = [
   //   {
   //    title: "Login",
   //    url: "/",
   //    icon: <FaUsers/>,
   //  },
    {
      title: "Tasks",
      url: "/main",
      icon: <FaTasks/>,
    },
    {
      title: "Users",
      url: "/users",
      icon: <FaUsers/>,
    },
    {
      title: "Invoices",
      url: "/invoices",
      icon: <FaFileInvoiceDollar />,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: <MdNotificationsActive/>,
    },
    {
      title: "Advertisements",
      url: "/advertisements",
      icon: <RiAdvertisementFill/>,
    },
    {
       title: "Conversations",
       url: "/conversations",
       icon: <BiSolidConversation/>,
    },
    {
       title: "Archive",
       url: "/archives",
       icon: <FaFileArchive/>,
    },
    {
       title: "Incoming emails",
       url: "/incoming-emails",
       icon: <MdEmail/>,
    },
    {
       title: "Job applications",
       url: "/job-applications",
       icon: <MdWork/>,
    },
    {
       title: "Private orders",
       url: "/individual-tasks",
       icon: <MdTask/>,
    },
]

export const sidebarSubItems = [
    {
      title: "Unsold assignments",
      url: "/tasks/unsold-tasks",
   },
   {
      title: "Tasks to be sold",
      url: "/tasks/sold-tasks",
   }, 
   {
      title: "You need to confirm completion",
      url: "/tasks/confirm-tasks",
   },
   {
      title: "Expired",
      url: "/tasks/expired-tasks",
   },
   {
      title: "Urgent",
      url: "/tasks/urgent-tasks",
   },
   {
      title: "Create a task",
      url: "/tasks/create-task",
   },
   {
      title: "Pricing of selling tasks",
      url: "#",
   },
]

export const users = [
   {
      name: 'Mhmd',
      owner: 'Mhmd',
      delete: true,
      pause: false,
      password: true,
      messaging: false,
      invoices: true,
      purchases: false,
      img: user,
   },
   {
      name: 'Ali',
      owner: 'Ali',
      delete: false,
      pause: true,
      password: true,
      messaging: true,
      invoices: true,
      purchases: false,
      img: user,
   },
   {
      name: 'Ahmad',
      owner: 'Ahmad',
      delete: true,
      pause: true,
      password: false,
      messaging: true,
      invoices: false,
      purchases: true,
      img: user,
   },
   {
      name: 'Nour',
      owner: 'Nour',
      delete: false,
      pause: true,
      password: false,
      messaging: true,
      invoices: false,
      purchases: true,
      img: user,
   },
   {
      name: 'Ehab',
      owner: 'Ehab',
      delete: true,
      pause: false,
      password: false,
      messaging: false,
      invoices: false,
      purchases: true,
      img: user,
   },
   {
      name: 'Ghaith',
      owner: 'Ghaith',
      delete: false,
      pause: false,
      password: true,
      messaging: false,
      invoices: true,
      purchases: false,
      img: user,
   },
]

export const notifications = [
     {
      id: 'noti-1',
      name: 'Mhmd',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      id: 'noti-2',
      name: 'Ahmad',
      img: user,
      text: 'create account',
      date: '20 min ago',
     },
     {
      id: 'noti-3',
      name: 'Ali',
      img: user,
      text: 'agreed to cancel',
      date: '20 min ago',
     },
     {
      id: 'noti-4',
      name: 'Nour',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      id: 'noti-5',
      name: 'Ghaith',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      id: 'noti-6',
      name: 'Mhmd',
      img: user,
      text: 'left a 5 star review',
      date: '20 min ago',
     },
     {
      id: 'noti-7',
      name: 'Ahmad',
      img: user,
      text: 'agreed to cancel',
      date: '20 min ago',
     },
     {
      id: 'noti-8',
      name: 'Ali',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      id: 'noti-9',
      name: 'Ghaith',
      img: user,
      text: 'left a 5 star review',
      date: '20 min ago',
     },
     {
      id: 'noti-10',
      name: 'Ehab',
      img: user,
      text: 'create account',
      date: '20 min ago',
     },
          // ...
]

export const reviews = [
   {
      id: 'review-1',
      user: 'Mhmd',
      img: user,
      text: 'This text can be installed on any design without a problem. It will not look like copied, unorganized, unformatted, or even incomprehensible text. Because it is still an alternative and temporary text.',
   },
   {
      id: 'review-2',
      user: 'Nour',
      img: user,
      text: 'This text can be installed on any design without a problem. It will not look like copied, unorganized, unformatted, or even incomprehensible text.'
   },
   {
      id: 'review-3',
      user: 'Ghaith',
      img: user,
      text: 'It will not look like copied, unorganized, unformatted, or even incomprehensible text.'
   }
]

export const invoices  = [
   {
      id: '#22225454',
      owner: 'Ehab',
      price: 100,
      quantity: 2,
      isArchive: true
   },
   {
      id: '#22225455',
      owner: 'Ghaith',
      price: 70,
      quantity: 3,
      isArchive: true
   },
   {
      id: '#22225456',
      owner: 'Ahmad',
      price: 200,
      quantity: 1,
      isArchive: false
   },
   {
      id: '#22225457',
      owner: 'Ali',
      price: 500,
      quantity: 5,
      isArchive: true
   },
]

export const advertisements = [
   {
      id: 'adver-1',
      img: ad1
   },
   {
      id: 'adver-2',
      img: ad2
   },
   {
      id: 'adver-3',
      img: ad3
   },
   // {
   //    id: 'adver-4',
   //    img: ad4
   // },
   // {
   //    id: 'adver-5',
   //    img: ad5
   // },
]

export const conversations = [
   {
      id: 'con-1',
      name: 'Tanbir Ahmed',
      img: user,
      message: 'sounds awesome!',
      date: '19:37',
      unread: 2
   },
   {
      id: 'con-2',
      name: 'Salim Smith',
      img: user,
      message: 'Ok, just hurry up a little bit...',
      date: '22:37',
      unread: 1
   },
   {
      id: 'con-3',
      name: 'Royal Bengol',
      img: user,
      message: 'Thank you dode.',
      date: '12:37',
      unread: 0
   },
   {
      id: 'con-4',
      name: 'Pabel Vuiya',
      img: user,
      message: 'How is it going..?',
      date: '02:00',
      unread: 0
   },
   {
      id: 'con-5',
      name: 'Tanbir Ahmed',
      img: user,
      message: 'Thank you for the awesome product man...!',
      date: 'a day ago',
      unread: 0
   },
        // ...
]

export const tasks  = [
   {
      id: 'task-1',
      owner: 'Ehab',
      name: 'Transfer form Gaza to rhfah',
      date: '19-11-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 100,
      city: 'Gaza',
      isIndividual: true,
      status: 'unsold'
   },
   {
      id: 'task-2',
      owner: 'Mhmd',
      name: 'Transfer form Aleppo to Homs',
      date: '01-12-2024',
      type: 'Transfer',
      icon:<HiTruck color='#FECC02' size={35}/>,
      price: 200,
      city: 'Aleppo',
      isIndividual: false,
      status: 'sold'
   },
   {
      id: 'task-3',
      owner: 'Ahmad',
      name: 'Transfer form Damascus to Hamah',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 150,
      city: 'Hamah',
      isIndividual: false,
      status: 'confirm'
   },
   {
      id: 'task-4',
      owner: 'Mhmd',
      name: 'Transfer form Idlib to Hamah',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 200,
      city: 'Idlib',
      isIndividual: false,
      status: 'expired'
   },
   {
      id: 'task-5',
      owner: 'Ali',
      name: 'Transfer form Damascus to Idlib',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 300,
      city: 'Damascus',
      isIndividual: false,
      status: 'urgent'
   },
   {
      id: 'task-6',
      owner: 'Ali',
      name: 'Transfer form Damascus to Alraqa',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 250,
      city: 'Damascus',
      isIndividual: true,
      status: 'urgent'
   },
   {
      id: 'task-7',
      owner: 'Ghaith',
      name: 'Transfer form Homs to Hamah',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 150,
      city: 'Homs',
      isIndividual: false,
      status: 'expired'
   },
   {
      id: 'task-8',
      owner: 'Ghaith',
      name: 'Transfer form Damascus to Aleppo',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 150,
      city: 'Damascus',
      isIndividual: false,
      status: 'confirm'
   },
   {
      id: 'task-9',
      owner: 'Nour',
      name: 'Transfer form Damascus to Homs',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 150,
      city: 'Damascus',
      isIndividual: false,
      status: 'sold'
   },
   {
      id: 'task-10',
      owner: 'Nour',
      name: 'Transfer form Aleppo to Hamah',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 250,
      city: 'Aleppo',
      isIndividual: true,
      status: 'unsold'
   },
   {
      id: 'task-11',
      owner: 'Mhmd',
      name: 'Transfer form Damascus to Homs',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 150,
      city: 'Damascus',
      isIndividual: false,
      status: 'expired'
   },
   {
      id: 'task-12',
      owner: 'Ali',
      name: 'Transfer form Aleppo to Hamah',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck color='#FECC02' size={35}/>,
      price: 250,
      city: 'Aleppo',
      isIndividual: false,
      status: 'confirm'
   },
]

export const emails = [
   {
      id: 'e-1',
      name: 'Mhmd',
      date: '18 minutes ago',
      message: 'Email text Email text Email text Email text Email text Email text'
   },
   {
      id: 'e-2',
      name: 'Ali',
      date: '1 day',
      message: 'Email text Email text Email text Email text Email text Email text'
   },
   {
      id: 'e-3',
      name: 'Ghaith',
      date: '08-12-2024',
      message: 'Email text Email text Email text Email text Email text Email text'
   },
]

export const jobApplications = [
   {
      id: 'job-1',
      name: 'Mhmd',
      city: 'Ghaza',
      country: 'Palestine',
      description: 'This text can be installed on any design without a problem. It will not look like copied, unorganized, unformatted, or even incomprehensible text. Because it is still an alternative and temporary text.'
   },
   {
      id: 'job-2',
      name: 'Ali',
      city: 'Aleppo',
      country: 'Syria',
      description: 'This text can be installed on any design without a problem. It will not look like copied, unorganized, unformatted, or even incomprehensible text. Because it is still an alternative and temporary text.'
   },
   {
      id: 'job-3',
      name: 'Osama',
      city: 'Hamah',
      country: 'Syria',
      description: 'This text can be installed on any design without a problem. It will not look like copied, unorganized, unformatted, or even incomprehensible text. Because it is still an alternative and temporary text.'
   },
]

export const types = [
   {
      id: 'type-1',
      title: 'Transfer'
   },
   {
      id: 'type-2',
      title: 'Clean'
   }
]

export const apartments = [
   {
      id: 'apartment-1',
      title: 'Regular apartment'
   },
   {
      id: 'apartment-2',
      title: 'Villa'
   },
   {
      id: 'apartment-3',
      title: 'Rad house'
   }
]
