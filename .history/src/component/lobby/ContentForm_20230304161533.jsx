import React from "react";

export default function ContentForm() {
  return (
    <div className=" ml-5 mt-5 w-full bg-white shadow-lg ">
      <div className="flex justify-between items-center py-2 bg-[#F8F8FF]">
        <h1 className="ml-5">Create Ticket</h1>
        <button className="mr-5 px-5 py-1 rounded border border-purple-500">
          Update Ticket
        </button>
      </div>
      <div className="grid mb-10">
        <label htmlFor="cat" className="mx-5 my-2">
          Category
        </label>
        <select
          placeholder="-select-"
          name="fruits"
          id="cat"
          className="w-[250px] mx-5 py-1 rounded border"
        >
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="guwava">Guwava</option>
        </select>

        <label htmlFor="cat" className="mx-5 my-2">
          Sub-category
        </label>
        <select
          placeholder="-select-"
          name="fruits"
          id="cat"
          className="w-[250px] mx-5 py-1 rounded border"
        >
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="guava">Guwava</option>
        </select>

        <label htmlFor="" className="mx-5 my-2">
          Issue
        </label>
        <textarea
          className="border w-[250px] h-[120px] mx-5 py-1"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Describe your issue..."
        ></textarea>

        <label htmlFor="cat" className="mx-5 my-2">
          Category
        </label>
        <select
          placeholder="-select-"
          name="fruits"
          id="cat"
          className="w-[250px] mx-5 py-1 rounded border"
        >
          <option value="apple">Apple</option>
          <option value="orange">Orange</option>
          <option value="mango">Mango</option>
          <option value="guwava">Guwava</option>
        </select>
      </div>
      <div className="py-2 bg-gr flex justify-end">
        <button className="mr-5 px-5 py-1 rounded border border-purple-500">
          Cancel
        </button>
        <button className="mr-5 px-5 py-1 bg-purple-600 rounded text-white">
           Submit
        </button>
      </div>
    </div>
  );
}
