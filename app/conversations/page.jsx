'use client';

import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import Command from '@/components/Command'
import { conversations } from '@/constants'
import ConversationItem from '@/components/ConversationItem'
import { useRouter } from 'next/navigation'

const Conversations = () => {

  const router = useRouter();

  const sendGroupMessageHandler = () => {
    router.push('/conversations/send-group')
  }
   
  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Conversations'/>
      <Command  //icon={<IoMdNotificationsOutline color='#FECC02'/>} 
                text='Send a group message'
                onClickHandler={sendGroupMessageHandler}
                />
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
  )
}

export default Conversations