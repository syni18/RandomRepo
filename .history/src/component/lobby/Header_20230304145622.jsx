import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h2>Healthwork AI</h2>
      <div className='mr-5'>
        <input type="text" placeholder="search..." className='border border-black px-' />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}
