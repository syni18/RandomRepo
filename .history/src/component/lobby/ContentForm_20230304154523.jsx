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
      <div className='grid'>
        <label htmlFor="cat" className='mx-5 my-2'>Category</label>
        <select name="fruits" id="cat" className='w-[200px] mx-5 py-1 rounded border-1'>
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="guwava">Guwava</option>
        </select>
      </div>
    </div>
  );
}
