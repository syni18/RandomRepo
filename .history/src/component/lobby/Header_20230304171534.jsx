import React from 'react'
import {TbTicket} from 'react-icons/tb'
export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white py-1">
      <h2 className="ml-16">Healthwork AI</h2>
      <div className="mr-5">
        <input
          type="text"
          placeholder="search..."
          className="border border-black px-2 py-1 mr-16 rounded focus:outline-none"
        />
        <TbTicket size={20}/>
      </div>
    </div>
  );
}
