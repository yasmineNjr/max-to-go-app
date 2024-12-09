import React from 'react'

const ContentComponent = ({ title, value}) => {
  return (
    <div className={`flex flex-row my-2 font-bold`}>
        <h2 className='text-textDefault font-bold'>{title}</h2>
        <h2 className='text-secondaryColor ml-2' >{value}</h2>
    </div>
  )
}

export default ContentComponent