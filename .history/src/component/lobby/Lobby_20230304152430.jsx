import React from 'react'
import ContentForm from './ContentForm'
import ContentHead from './ContentHead'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Lobby() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex border w-[1240px] h-[650px] mt-2 overflow-y-hidden">
        {/* left */}
        <div className="h-full">
          <Sidebar />
        </div>
        <div className=" flex-1">
          <Header />
          <div className="flex bg-[#F8F8FF]">
            <ContentHead />
            <ContentForm />
          </div>
        </div>
      </div>
    </div>
  );
}