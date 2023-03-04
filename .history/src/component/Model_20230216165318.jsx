import React from 'react'
import {AiOutlineInfoCircle} from "react-icons/ai"
import {IoCloseSharp} from "react-icons/io5"
// import './Model.css'
function Model() {
  return (
    <div className="border-2 bg-black h-[745px] flex items-center justify-center">
      <div className="w-[550px] bg-white px-10 py-10">
        <div className="pb-3 text-xl text-black flex justify-start items-center">
          <AiOutlineInfoCircle size={22} />
          <p className='ml-2'>Error Message</p>
          <div className="ml-8"><IoCloseSharp size={24}/></div>
        </div>
        <hr />
        <div className="pt-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis
            ab at unde voluptates. Commodi architecto quod quasi perferendis
            ullam repellat fuga inventore, porro quis nam nemo neque quae
            deleniti! Quaerat, iste molestias. Dignissimos veniam esse repellat
            mollitia dolorem natus. Cumque culpa necessitatibus distinctio
            itaque molestiae placeat tempora ea. Reiciendis.
          </p>
        </div>
        <div className="pt-3">
          <input className='border-2 px-' type="button" value="SUBMIT" />
        </div>
      </div>
    </div>
  );
}

export default Model