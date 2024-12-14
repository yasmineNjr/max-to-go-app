import { ad1, ad2, ad3, truck, user } from "@/public/assets"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

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
      title: "Tasks",
      url: "/",
      icon: Home,
    },
    {
      title: "Users",
      url: "/users",
      icon: Inbox,
    },
    {
      title: "Invoices",
      url: "/invoices",
      icon: Calendar,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: Search,
    },
    {
      title: "Advertisements",
      url: "/advertisements",
      icon: Settings,
    },
    {
       title: "Conversations",
       url: "/conversations",
       icon: Settings,
    },
    {
       title: "Archives",
       url: "/archives",
       icon: Settings,
    },
    {
       title: "Incoming emails",
       url: "/incoming-emails",
       icon: Settings,
    },
    {
       title: "Job applications",
       url: "/job-applications",
       icon: Settings,
    },
    {
       title: "Individual tasks",
       url: "/individual-tasks",
       icon: Settings,
    },
  ]

export const sidebarSubItems = [
    {
      title: "Unsold assignments",
      url: "#",
   },
   {
      title: "Tasks to be sold",
      url: "#",
   }, 
   {
      title: "You need to confirm completion",
      url: "#",
   },
   {
      title: "Expired",
      url: "#",
   },
   {
      title: "Urgent",
      url: "#",
   },
   {
      title: "Create a task",
      url: "#",
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
      name: 'Tanbir Ahmed',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      id: 'noti-2',
      name: 'Salim Smith',
      img: user,
      text: 'left a 5 star review',
      date: '20 min ago',
     },
     {
      id: 'noti-3',
      name: 'Royal Bengol',
      img: user,
      text: 'agreed to cancel',
      date: '20 min ago',
     },
     {
      id: 'noti-4',
      name: 'Pabel Vuiya',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      id: 'noti-5',
      name: 'Tanbir Ahmed',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      id: 'noti-6',
      name: 'Salim Smith',
      img: user,
      text: 'left a 5 star review',
      date: '20 min ago',
     },
     {
      id: 'noti-7',
      name: 'Royal Bengol',
      img: user,
      text: 'agreed to cancel',
      date: '20 min ago',
     },
     {
      id: 'noti-8',
      name: 'Pabel Vuiya',
      img: user,
      text: 'Placed a new order',
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
      icon: truck,
      price: 100,
      city: 'Gaza',
   },
   {
      id: 'task-2',
      owner: 'Mhmd',
      name: 'Transfer form Aleppo to Homs',
      date: '01-12-2024',
      type: 'Transfer',
      icon: truck,
      price: 200,
      city: 'Aleppo',
   },
   {
      id: 'task-1',
      owner: 'Ahmad',
      name: 'Transfer form Damascus to Hamah',
      date: '24-10-2024',
      type: 'Transfer',
      icon: truck,
      price: 150,
      city: 'Gaza',
   },
]
