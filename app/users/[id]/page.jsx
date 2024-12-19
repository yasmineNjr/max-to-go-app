import styles from '@/app/styles'
import Button from '@/components/Button';
import ContentComponent from '@/components/ContentComponent';
import Title from '@/components/Title'
import { users } from '@/constants';
import Image from 'next/image';
import React from 'react'

const UserInfoPage = ({ params }) => {

  const user = users.find((user) => user.name === params.id);

  return (
    <div className={`${styles.mainSection}`}>
      <Title text='User Information'/>
      <div className='rounded-xl border-2 border-textPrimary bg-blue-400 w-full my-10 p-5 lg:p-10'>
        <div className='flex flex-row justify-center items-center w-full gap-5 text-textDefault'>
          <h3>User: </h3>
          <div 
              className="flex flex-row items-center justify-between gap-2"
          >
            <Image src={user.img} alt='user' className='h-[30px] w-[30px] rounded-full'/>
            <p className="w-full text-left text-textDefault font-light">{user.name}</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-start items-start w-full gap-5 text-textDefault my-5'>
          <div className='w-[100%] lg:w-[50%]'>
            <ContentComponent title='Company Name: ' value='AL-Rahma Company'/>
            <ContentComponent title='Organization Number: ' value='#987800255'/>
            <ContentComponent title='Name of responsible person: ' value='Mohammed'/>
            <ContentComponent title='Address : ' value='Transfer form Gaza to rhfah'/>
            <ContentComponent title='Type Of Business :' value=' Transfer form Gaza to rhfah'/>
            <ContentComponent title='Email : ' value='Mohammed@gmail.com'/>
          </div>
          <div className='w-[100%] lg:w-[50%]'>
            <ContentComponent title='Phone Numer : ' value='+978487485785'/>
            <ContentComponent title='PassWord : ' value='2211122211'/>
          </div>
        </div>
        <div className='w-[100%]'>
            <ContentComponent title='Brief Description of Your Company :' value='This text can be installed on any design without a problem. It
                will not look like copied, unorganized, unformatted, or even incomprehensible'/>
          </div>
        <div className="flex flex-1 justify-center items-center w-full mt-10">
            <Button styles='w-[100%] lg:w-[50%] rounded-3xl py-2 text-[12px] font-bold' title='Print PDF or JPEG' />
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage