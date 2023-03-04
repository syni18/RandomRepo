import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h2>Healthwork AI</h2>
      <div className='mr-5'>
        <input type="text" placeholder="search..." className='border border-black px-7 py-1 mr-16' />
        <input type="submit" value="Submit" className='border border-pu'/>
      </div>
    </div>
  );
}
