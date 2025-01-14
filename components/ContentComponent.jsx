import React from 'react'

const ContentComponent = ({ title, value, icon, isLoading}) => {
  
  return (
    // flex-col md:flex-row lg:flex-row 
    <div className={`flex flex-row my-2 font-bold w-full md:mb-3`}>
        <h2 className='text-textDefault font-bold w-full lg:w-[45%]'>{title}</h2>
        {
          value &&
          <h2 className='text-secondaryColor lg:ml-2 mt-0 md:mt-1 w-full lg:w-[55%]'>{value}</h2>
        }
        {
          icon && 
          <div className='text-secondaryColor mt-0 md:mt-1 w-full lg:w-[55%] cursor-pointer'>
            {
              isLoading ? 
              <div>
                <div className="w-5 h-5 border-2 border-[#FECC02] border-t-transparent rounded-full animate-spin"></div>
              </div>
              :
              icon
            }
          </div>
        }
       
    </div>
  )
}

export default ContentComponent