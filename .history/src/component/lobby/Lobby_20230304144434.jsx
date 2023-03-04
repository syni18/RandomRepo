import React from 'react'
import Sidebar from './Sidebar'

export default function Lobby() {
  return (
    <div className='flex justify-center items-center'>
        <div className='border w-[1240px] h-[700px]'>
            {/* left */}
            <div className='h-full'>
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}
