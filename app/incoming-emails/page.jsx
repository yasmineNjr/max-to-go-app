import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import styles from '../styles';
import Title from '@/components/Title';
import { emails } from '@/constants';
import EmailsItem from '@/components/EmailsItem';
import ProtectedRoute from '@/components/ProtectedRoute';

const IncomingEmails = () => {
  return (
    <ProtectedRoute>
      <div className={`${styles.mainSection} h-full`}>
        <Title text='Incoming emails' icon={<MdOutlineEmail className='text-primary' size={22}/>}/>
        {
          <div className='flex flex-col w-full gap-3 justify-center mt-5'>
          { 
            emails.map((email) => (
                <EmailsItem id={email.id} 
                            name={email.name} 
                            date={email.date} 
                            message={email.message}
                            title={email.title}
                />
              ))
            }
          </div> 
        }
      </div>
    </ProtectedRoute>
  )
}

export default IncomingEmails