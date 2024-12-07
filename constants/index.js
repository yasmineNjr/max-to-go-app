import { user } from "@/public/assets"
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
      name: 'Tanbir Ahmed',
      img: user,
   },
   {
      name: 'Salim Smith',
      img: user,
   },
   {
      name: 'Royal Bengol',
      img: user,
   },
   {
      name: 'Pabel Vuiya',
      img: user,
   },
]

export async function getUserData() {
   // Fetch data from your API here.
   return [
     {
      owner: 'Mhmd',
      delete: true,
      pause: false,
      password: true,
      messaging: false,
      invoices: true,
      purchases: false,
     },
     {
      owner: 'Ali',
      delete: false,
      pause: true,
      password: true,
      messaging: true,
      invoices: true,
      purchases: false,
     },
     {
      owner: 'Ahmad',
      delete: true,
      pause: true,
      password: false,
      messaging: true,
      invoices: false,
      purchases: true,
     },
     {
      owner: 'Nour',
      delete: false,
      pause: true,
      password: false,
      messaging: true,
      invoices: false,
      purchases: true,
     },
     {
      owner: 'Ehab',
      delete: true,
      pause: false,
      password: false,
      messaging: false,
      invoices: false,
      purchases: true,
     },
     {
      owner: 'Ghaith',
      delete: false,
      pause: false,
      password: true,
      messaging: false,
      invoices: true,
      purchases: false,
     },
     {
      owner: 'Mhmd',
      delete: true,
      pause: false,
      password: true,
      messaging: false,
      invoices: true,
      purchases: false,
     },
     {
      owner: 'Ali',
      delete: false,
      pause: true,
      password: true,
      messaging: true,
      invoices: true,
      purchases: false,
     },
     {
      owner: 'Ahmad',
      delete: true,
      pause: true,
      password: false,
      messaging: true,
      invoices: false,
      purchases: true,
     },
     {
      owner: 'Nour',
      delete: false,
      pause: true,
      password: false,
      messaging: true,
      invoices: false,
      purchases: true,
     },
     {
      owner: 'Ehab',
      delete: true,
      pause: false,
      password: false,
      messaging: false,
      invoices: false,
      purchases: true,
     },
     {
      owner: 'Ghaith',
      delete: false,
      pause: false,
      password: true,
      messaging: false,
      invoices: true,
      purchases: false,
     },
          // ...
   ]
}

 export const notifications = [
     {
      name: 'Tanbir Ahmed',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      name: 'Salim Smith',
      img: user,
      text: 'left a 5 star review',
      date: '20 min ago',
     },
     {
      name: 'Royal Bengol',
      img: user,
      text: 'agreed to cancel',
      date: '20 min ago',
     },
     {
      name: 'Pabel Vuiya',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      name: 'Tanbir Ahmed',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
     {
      name: 'Salim Smith',
      img: user,
      text: 'left a 5 star review',
      date: '20 min ago',
     },
     {
      name: 'Royal Bengol',
      img: user,
      text: 'agreed to cancel',
      date: '20 min ago',
     },
     {
      name: 'Pabel Vuiya',
      img: user,
      text: 'Placed a new order',
      date: '20 min ago',
     },
          // ...
]

