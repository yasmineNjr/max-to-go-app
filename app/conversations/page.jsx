import React from 'react'
import styles from '../styles'
import Title from '@/components/Title'
import Command from '@/components/Command'
import { conversations } from '@/constants'
import ConversationItem from '@/components/ConversationItem'

const Conversations = () => {
  return (
    <div className={`${styles.mainSection}`}>
      <Title text='Conversations'/>
      <Command  //icon={<IoMdNotificationsOutline color='#FECC02'/>} 
                text='Send a group message'
                // onClickHandler={createNoticesHandler}
                />
      {
        conversations.map((con) => (
          <ConversationItem img={con.img} 
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