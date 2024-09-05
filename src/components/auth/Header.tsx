
import React from 'react'

interface HeaderProps {
    label: string
}

export const Header = ({label}: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
        <h1>Auth</h1>
        <p className='text-[grey]'>{label}</p>
    </div>
  )
}
