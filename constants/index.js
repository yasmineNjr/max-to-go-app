import { ad1, ad2, ad3, user, user2, user3, user4, user5 } from "@/public/assets"
import { BellRing, BriefcaseBusiness, Calendar, ClipboardCheck, ClipboardPlus, ContactRound, Database, FileArchive, Files, Home, House, Inbox, ListChecks, Mails, Megaphone, MessageCircleMore, Receipt, Search, Settings, Users } from "lucide-react"
import { HiTruck } from "react-icons/hi2";
// import { FaTasks } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { BiSolidConversation } from "react-icons/bi";
import { FaFileArchive } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { MdWork } from "react-icons/md";
// import { MdTask } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdGppBad } from "react-icons/md";
import { MdPending } from "react-icons/md";
import { RiProgress2Fill } from "react-icons/ri";
import { RiProgress3Fill } from "react-icons/ri";
import { RiProgress1Fill } from "react-icons/ri";

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
   {
      category: "Core Tasks",
      items: [
         {
            title: "Tasks",
            icon: <ListChecks size={18}/>,
            items: [
               { title: "Unsold assignments", url: "/tasks/unsold-tasks", count: '10' },
               { title: "Tasks to be sold", url: "/tasks/sold-tasks", count: '8' }, 
               { title: "You need to confirm completion", url: "/tasks/confirm-tasks", count: '12' },
               { title: "Expired", url: "/tasks/expired-tasks", count: '5' },
               { title: "Urgent", url: "/tasks/urgent-tasks", count: '12' },
            ],
         },
         { title: "Private orders", url: "/individual-tasks", icon: <ClipboardCheck size={18}/> },
         { title: "Create a task", url: "/tasks/create-task", icon: <ClipboardPlus size={18}/> },
         { title: "Pricing of selling tasks", url: "#", icon: <Receipt size={18}/> },
      ]
   },
   {
      category: "User and Communication",
      items: [
         { title: "Users", url: "/users", icon: <Users size={18}/>, },
         { title: "Notifications", url: "/notifications", icon: <BellRing size={16}/>, },
         { title: "Conversations", url: "/conversations", icon: <MessageCircleMore size={16}/>, },
         { title: "Incoming emails", url: "/incoming-emails", icon: <Mails size={16}/>, },
      ]
   },
   {
      category: "Data and Records",
      items: [
         { title: "Invoices", url: "/invoices", icon: <Files size={16}/>, },
         { title: "Archive", url: "/archives", icon: <FileArchive size={16}/>, },
         { title: "Advertisements", url: "/advertisements", icon: <Megaphone size={16}/>, },
         { title: "Job applications", url: "/job-applications", icon: <BriefcaseBusiness size={18} />, },
      ]
   },
   // {
   //    title: "Core Tasks",
   //    // icon: <ListChecks size={20}/>,
   //    items: [
   //       { title: "Unsold assignments", url: "/tasks/unsold-tasks", count: '10' },
   //       { title: "Tasks to be sold", url: "/tasks/sold-tasks", count: '8' }, 
   //       { title: "You need to confirm completion", url: "/tasks/confirm-tasks", count: '12' },
   //       { title: "Expired", url: "/tasks/expired-tasks", count: '5' },
   //       { title: "Urgent", url: "/tasks/urgent-tasks", count: '12' },
   //       { title: "Private orders", url: "/individual-tasks", count: '12' },
   //       { title: "Create a task", url: "/tasks/create-task", count: '' },
   //       { title: "Pricing of selling tasks", url: "#", count: '' },
   //     ],
   // },
   // {
   // title: "User and Communication",
   // // icon: <ContactRound size={18}/>,
   // items: [
   //    { title: "Users", url: "/users", icon: <FaUsers size={16}/>, },
   //    { title: "Notifications", url: "/notifications", icon: <MdNotificationsActive size={16}/>, },
   //    { title: "Conversations", url: "/conversations", icon: <BiSolidConversation size={16}/>, },
   //    { title: "Incoming emails", url: "/incoming-emails", icon: <MdEmail size={16}/>, },
   // ],
   // },
   // {
   // title: "Data and Records",
   // // icon: <Database size={18}/>,
   // items: [
   //    { title: "Invoices", url: "/invoices", icon: <FaFileInvoiceDollar size={16}/>, },
   //    { title: "Archive", url: "/archives", icon: <FaFileArchive size={16}/>, },
   //    { title: "Advertisements", url: "/advertisements", icon: <RiAdvertisementFill size={16}/>, },
   //    { title: "Job applications", url: "/job-applications", icon: <BriefcaseBusiness size={18} />, },
   // ],
   // },
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
      logo: user,
      organizationNumber: 'Mhmd organizationNumber',
      nameOfResponsiblePerson: 'Mhmd ResponsiblePerson',
      address: 'Mhmd address',
      typeOfBusiness: 'Mhmd typeOfBusiness',
      email: 'Mhmd@mail.com',
      phone: '1111111111',
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
      img: user2,
      logo: user2,
      organizationNumber: 'Ali organizationNumber',
      nameOfResponsiblePerson: 'Ali ResponsiblePerson',
      address: 'Ali address',
      typeOfBusiness: 'Ali typeOfBusiness',
      email: 'Ali@mail.com',
      phone: '1212121122',
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
      img: user3,
      logo: user3,
      organizationNumber: 'Ahmad organizationNumber',
      nameOfResponsiblePerson: 'Ahmad ResponsiblePerson',
      address: 'Ahmad address',
      typeOfBusiness: 'Ahmad typeOfBusiness',
      email: 'Ahmad@mail.com',
      phone: '222222222',
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
      img: user4,
      logo: user4,
      organizationNumber: 'Nour organizationNumber',
      nameOfResponsiblePerson: 'Nour ResponsiblePerson',
      address: 'Nour address',
      typeOfBusiness: 'Nour typeOfBusiness',
      email: 'Nour@mail.com',
      phone: '33333333',
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
      img: user5,
      logo: user5,
      organizationNumber: 'Ehab organizationNumber',
      nameOfResponsiblePerson: 'Ehab ResponsiblePerson',
      address: 'Ehab address',
      typeOfBusiness: 'Ehab typeOfBusiness',
      email: 'Ehab@mail.com',
      phone: '4444444444',
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
      logo: user,
      organizationNumber: 'Ghaith organizationNumber',
      nameOfResponsiblePerson: 'Ghaith ResponsiblePerson',
      address: 'Ghaith address',
      typeOfBusiness: 'Ghaith typeOfBusiness',
      email: 'Ghaith@mail.com',
      phone: '55555555',
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
      date: '02-01-2024',
      isArchive: true
   },
   {
      id: '#22225455',
      owner: 'Ghaith',
      price: 70,
      quantity: 3,
      date: '05-12-2023',
      isArchive: true
   },
   {
      id: '#22225456',
      owner: 'Ahmad',
      price: 200,
      quantity: 1,
      date: '02-05-2024',
      isArchive: false
   },
   {
      id: '#22225457',
      owner: 'Ali',
      price: 500,
      quantity: 5,
      date: '10-03-2024',
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
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
      icon: <HiTruck size={35} className="text-primary"/>,
      price: 250,
      city: 'Aleppo',
      isIndividual: false,
      status: 'confirm'
   },
   {
      id: 'task-11',
      owner: 'Mhmd',
      name: 'Transfer form Damascus to Homs',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck size={35} className="text-primary"/>,
      price: 150,
      city: 'Damascus',
      isIndividual: true,
      status: 'new'
   },
   {
      id: 'task-12',
      owner: 'Ali',
      name: 'Transfer form Aleppo to Hamah',
      date: '24-10-2024',
      type: 'Transfer',
      icon: <HiTruck size={35} className="text-primary"/>,
      price: 250,
      city: 'Aleppo',
      isIndividual: true,
      status: 'execute'
   },
]

export const emails = [
   {
      id: 'e-1',
      name: 'Mhmd',
      date: '18 minutes ago',
      title: 'Email Title',
      message: 'Email text Email text Email text Email text Email text Email text'
   },
   {
      id: 'e-2',
      name: 'Ali',
      date: '1 day',
      title: 'Email Title',
      message: 'Email text Email text Email text Email text Email text Email text'
   },
   {
      id: 'e-3',
      name: 'Ghaith',
      date: '08-12-2024',
      title: 'Email Title',
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

export const taskStates = [
   {
      id: 'stat-1',
      value: 'new',
      label: 'New',
      icon: <RiProgress1Fill size={20} />
   },
   {
      id: 'stat-2',
      value: 'wait',
      label: 'Awaiting customer approval on the quote',
      icon: <MdPending size={20}/>
   },
   {
      id: 'stat-3',
      value: 'approved',
      label: 'Approved',
      icon: <FaCircleCheck size={18} />
   },
   {
      id: 'stat-4',
      value: 'cancel',
      label: 'Rejected by the customer',
      icon: <MdCancel  size={20} />
   },
   {
      id: 'stat-5',
      value: 'sale',
      label: 'Pending Sale',
      icon: <RiProgress2Fill  size={20} />
   },
   {
      id: 'stat-6',
      value: 'execute',
      label: 'Waiting for Execution',
      icon: <RiProgress3Fill size={20} />
   },
   {
      id: 'stat-7',
      value: 'completed',
      label: 'Completed',
      icon: <IoCheckmarkDoneCircle size={20} />
   },
   {
      id: 'stat-8',
      value: 'fake',
      label: 'Fake Request',
      icon: <MdGppBad size={20} />
   },
]

export const formatDateWithPadding = (dateString) => {
   const date = new Date(dateString);
   const day = String(date.getDate()).padStart(2, "0");
   const month = String(date.getMonth() + 1).padStart(2, "0");
   const year = date.getFullYear();
   
   return `${day}-${month}-${year}`;
 };

 export function abbreviateUserName(userName)
 {
     if (!userName) return '';
 
     // Split by spaces and remove extra spaces.
     const nameParts = userName.split(/\s+/);
 
     // Take first two letters.
     if (nameParts.length === 1) return nameParts[0].slice(0, 2).toUpperCase();
 
     // First letter of first and last name.
     return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
 }