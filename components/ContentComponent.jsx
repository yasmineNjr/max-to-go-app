import React from 'react'

const ContentComponent = ({ title, value}) => {
  return (
    <div className={`flex flex-col lg:flex-row my-2 font-bold w-full md:mb-3`}>
        <h2 className='text-textDefault font-bold w-full lg:w-[45%]'>{title}</h2>
        <h2 className='text-secondaryColor lg:ml-2 mt-0 md:mt-1 w-full lg:w-[55%]' >{value}</h2>
    </div>
  )
}

export default ContentComponent