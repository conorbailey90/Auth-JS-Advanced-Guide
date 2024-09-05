import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <nav className='bg-black text-white'>
            <h2>This is shared nav for dashboard</h2>
        </nav> 
        {children}
    </div>
  )
}

export default layout