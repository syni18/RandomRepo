import React from 'react'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h2>Healthwork AI</h2>
      <div className=''>
        <input type="text" placeholder="search..." />
        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}
