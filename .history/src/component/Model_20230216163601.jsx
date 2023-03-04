import React from 'react'
import {Ai}
// import './Model.css'
function Model() {
  return (
    <div className="border-2 bg-black h-[745px]">
      <div className="w-[550px] bg-white my-20 mx-[35%] px-10 py-10">
        <div className="pb-3 text-xl text-black">
          <AiOutlineInfoCircle/>
          heading
        </div>
        <div className="part2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis
            ab at unde voluptates. Commodi architecto quod quasi perferendis
            ullam repellat fuga inventore, porro quis nam nemo neque quae
            deleniti! Quaerat, iste molestias. Dignissimos veniam esse repellat
            mollitia dolorem natus. Cumque culpa necessitatibus distinctio
            itaque molestiae placeat tempora ea. Reiciendis.
          </p>
        </div>
        <div className="part3">
          <input type="button" value="SUBMIT" />
        </div>
      </div>
    </div>
  );
}

export default Model