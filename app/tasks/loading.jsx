import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
        <div className="w-10 h-10 border-2 border-secondaryColor border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading