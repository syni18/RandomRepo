import React from 'react'

export default function ContentForm() {
  return (
    <div className=" ml-5 mt-5 w-full bg-white shadow-lg">
      <div className="flex justify-between items-center py-2 bg-[#F8F8FF]">
        <h1 className="ml-5">Create Ticket</h1>
        <button className="mr-5 px-5 py-1 rounded border border-purple-500">
          Update Ticket
        </button>
      </div>
      <div>
        <label htmlFor="cat">Category</label>
        <select name="fruits" id="cat" className=''>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="guwava">Guwava</option>
        </select>
      </div>
    </div>
  );
}
