import React from 'react'

const ContentComponent = ({ title, value, icon, isLoading}) => {
  
  return (
    // flex-col md:flex-row lg:flex-row 
    <div className={`flex flex-row my-2 font-bold w-full md:mb-3`}>
       {/* w-full lg:w-[45%] */}
        <h1 className='text-foreground font-bold mr-5 w-[35%]'>{title}: </h1>
        {
          value &&
          // w-full lg:w-[55%]
          <p className='text-foreground mt-0 font-light'>{value}</p>
        }
        {
          icon && 
          // <div className='text-primary mt-0 md:mt-1 w-full lg:w-[55%] cursor-pointer'>
            // {
              isLoading ? 
              <div>
                <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
              :
              icon
            // }
          // </div>
        }
       
    </div>
  )
}

export default ContentComponent