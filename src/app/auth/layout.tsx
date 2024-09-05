import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center bg-[#161616]'>
        <h2>Auth</h2>
        {children}
    </div>
  )
}

export default layout