import React from 'react'

export default function ContentHead() {
  return (
    <div className="w-[250px] border rounded ml-5 mt-10">
      <ul className="">
        <li className="px-2 py-3 border-l-4 border-purple-500">
          Create Ticket
        </li>
        <li className="px-2 py-3">Check Ticket</li>
        <li className="px-2 py-3">View Ticket</li>
        <li className="px-2 py-3">View ticket history</li>
      </ul>
    </div>
  );
}
