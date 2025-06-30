import React from 'react'
import './ImgContainer.css'
const ImgContainer = (props) => {
  return (
    <div className='img-container'>
        <img src={props.img} alt="heroImg" />
    </div>
  )
}

export default ImgContainer