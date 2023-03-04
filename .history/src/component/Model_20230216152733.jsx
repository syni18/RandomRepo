import React from 'react'
import './Model.css'
function Model() {
  return (
    <div className='main'>
        <div className="container">
            <div className="part">heading</div>
            <div className="part">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam vero nesciunt aliquid harum expedita perspiciatis illo velit doloribus, ducimus ratione?</p>
            </div>
            <div className="part">
                <input type="button" value="Submit" />
            </div>
        </div>
    </div>
  )
}

export default Model