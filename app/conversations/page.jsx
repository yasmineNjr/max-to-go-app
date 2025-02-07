'use client';

import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import Command from '@/components/Command'
import { conversations } from '@/constants'
import ConversationItem from '@/components/ConversationItem'
import { useRouter } from 'next/navigation'
import ProtectedRoute from '@/components/ProtectedRoute';
import { Send } from 'lucide-react';

const Conversations = () => {

  const router = useRouter();

  const sendGroupMessageHandler = () => {
    router.push('/conversations/send-group')
  }
   
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection}`}>
        <Title text='Conversations' commandText='Send a group message' commandIcon={<Send size={16}/>} onClickHandler={sendGroupMessageHandler}/>
        <div className='mt-5'>
        {
          conversations.map((con) => (
            <ConversationItem key={con.id} 
                              img={con.img} 
                              name={con.name} 
                              message={con.message} 
                              date={con.date} 
                              isCommand={true}
                              command1='Delete'
                              command2='Pause'
                              command3='See'
                              unread={con.unread}/>
          ))
        }
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Conversations