import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import styles from '../styles';
import Title from '@/components/Title';
import { emails } from '@/constants';
import EmailsItem from '@/components/EmailsItem';

const IncomingEmails = () => {
  return (
    <div className={`${styles.mainSection} h-full bg-black`}>
      <Title text='Incoming emails' icon={<MdOutlineEmail color='#006AA7' size={22}/>}/>
      {
        <div className='flex flex-col w-full gap-3 justify-center mt-5'>
        { 
          emails.map((email) => (
              <EmailsItem id={email.id} 
                          name={email.name} 
                          date={email.date} 
                          message={email.message}
              />
            ))
          }
        </div> 
      }
    </div>
  )
}

export default IncomingEmails