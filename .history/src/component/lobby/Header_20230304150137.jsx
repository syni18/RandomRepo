import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between bor">
      <h2 className='ml-16'>Healthwork AI</h2>
      <div className='mr-5'>
        <input type="text" placeholder="search..." className='border border-black px-2 py-1 mr-16 rounded focus:outline-none' />
        <input type="submit" value="Submit" className='border border-purple-500 px-5 py-1 rounded'/>
      </div>
    </div>
  );
}
