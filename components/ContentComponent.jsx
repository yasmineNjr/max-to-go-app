import React from 'react'

const ContentComponent = ({ title, value}) => {
  return (
    <div className='flex flex-col lg:flex-row  my-5 font-bold'>
        <h2 className='text-textDefault font-bold'>{title}</h2>
        <h2 className='text-secondaryColor' >{value}</h2>
    </div>
  )
}

export default ContentComponent