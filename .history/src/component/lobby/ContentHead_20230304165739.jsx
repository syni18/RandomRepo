import React from 'react'
import {IoTicketSharp} from 

export default function ContentHead() {
  return (
    <>
      <div className="w-[250px] h-max rounded ml-5 mt-10 bg-white shadow-lg">
        <ul className="">
          <li className="px-2 py-3 border-l-4 border-purple-500">
            Create Ticket
          </li>
          <li className="px-2 py-3"><IoTicketSharp/>Check Ticket</li>
          <li className="px-2 py-3">View Ticket</li>
          <li className="px-2 py-3">View ticket history</li>
        </ul>
        <p className='bg-[#F8F8FF] text-sm text-purple-700 pl-7'>&lt; Go back to lobby</p>
      </div>
    </>
  );
}
