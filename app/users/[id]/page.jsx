'use client'

import styles from '@/app/styles'
import Button from '@/components/Button';
import ContentComponent from '@/components/ContentComponent';
import Title from '@/components/Title'
import { users } from '@/constants';
import Image from 'next/image';
import React, { useState } from 'react'
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from '@/components/PDFDocument';
import { useSearchParams } from 'next/navigation';

const UserInfoPage = ({ params }) => {

  const user = users.find((user) => user.name === params.id);

  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  // const [formData, setFormData] = useState({ name: "xxx", email: "xxx@mail.com" });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };
  // I need route.js file for the 'https://api.max-togo.com/api/admin/deletecompany' method with companyId parameter and token
  const data = {
    name: user.name,
    img: user.img,
    company : 'AL-Rahma Company',
    number: '#987800255',
    responsiblePerson: user.name,
    address : 'Transfer form Gaza to rafah',
    business :'Transfer form Gaza to rafah',
    email : `${user.name}@gmail.com`,
    phone : '+978487485785',
    description: 'This text can be installed on any design without a problem. It will not look like copied, unorganized, unformatted, or even incomprehensible'
  }

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
        {/* lg:w-[50%] */}
          <div className='w-[100%] '>
            <ContentComponent title='Company Name: ' value='AL-Rahma Company'/>
            <ContentComponent title='Organization Number: ' value='#987800255'/>
            <ContentComponent title='Name of responsible person: ' value={user.name}/>
            <ContentComponent title='Address : ' value='Transfer form Gaza to rhfah'/>
            <ContentComponent title='Type Of Business :' value=' Transfer form Gaza to rhfah'/>
            <ContentComponent title='Email : ' value={`${user.name}@gmail.com`}/>
            <ContentComponent title='Phone Numer : ' value='+978487485785'/>
          </div>
          {/* <div className='w-[100%] lg:w-[50%]'>
            <ContentComponent title='Phone Numer : ' value='+978487485785'/>
            <ContentComponent title='Password : ' value='**********'/>
          </div> */}
        </div>
        <div className='w-[100%]'>
            <ContentComponent title='Brief Description of Your Company :' value='This text can be installed on any design without a problem. It
                will not look like copied, unorganized, unformatted, or even incomprehensible'/>
          </div>
        <div className="flex flex-col md:flex-row flex-1 justify-center items-center w-full mt-10 gap-3">
            { source === 'notification' && 
                <Button styles='w-[100%] lg:w-[50%] rounded-3xl py-2 text-[14px] font-bold' 
                    title='Accept'
                    // onClickHandler={generatePDF} 
                />
            }
            <PDFDownloadLink
              document={<PDFDocument data={data} />}
              fileName={`${user.name}.pdf`}
              className="w-[100%] lg:w-[50%] rounded-3xl py-2 text-[14px] font-bold cursor-pointer flex flex-row items-center justify-center gap-2 px-6 bg-secondaryColor h-[35px] text-primaryColor outline-none"
            >
              {({ loading }) =>
                loading ? "Generating PDF..." : "Download PDF"
              }
            </PDFDownloadLink>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage


