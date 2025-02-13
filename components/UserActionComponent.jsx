import React from 'react'

const UserActionComponent = ({ title, form}) => {
  return (
    <div className='bg-secondary rounded-2xl flex flex-col items-center justify-center  my-5 w-full'>
        {/* <Image src={logo} alt='logo' width={45} height={45} className=''/> */}
        <h1 className='text-xl mb-5 text-primary'>{title}</h1>
        {form}
    </div>
  )
}

export default UserActionComponent