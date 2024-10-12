import React from 'react'
import possibilityimage from'../../assests/possibility.png'
import './possibility.css'
const Possibility = () => {
  return (
    <div className="npl_possibility section__padding">
      <div className="npl_possibility-image">
        <img src={possibilityimage} alt="possiblitiyImage" />
      </div>
      <div className="npl_possibility-content">
        <h4>Request Early Access to get started</h4>
        <h1 className='gradient__text'>The posibility are  beyond your Imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam nesciunt doloribus sequi quisquam repudiandae ducimus, magni, beatae inventore reiciendis unde? Optio voluptatum repellat, doloribus accusamus magni numquam ipsam temporibus?</p>
        <h4>Request Early Access to get started</h4>
      </div>
    </div>
  )
}

export default Possibility
