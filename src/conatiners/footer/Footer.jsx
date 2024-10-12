import React from 'react'
import gpt3logo from '../../assests/logo.svg'
import './footer.css'
const Footer = () => {
  return (
    <div className="npl_footer section__margin" >
      <div className="npl_footer-heading">
        <h1 className='gradient__text'>Do you want to in step by step explore </h1>

      </div>
      <div className="npl_footer-btn">
        <p>request Early acess</p>


      </div>
      <div className="npl_footer-links">
        <div className="npl_footer-links_logo">
         
          <h1>NPL-X</h1>
           <p>Lorem ipsum, e maxime corporis nam quam enim.</p>
        </div>
        <div className="npl_footer-links_div">
          <h4>LInks</h4>
          <p>overns</p>
          <p>Social media</p>
          <p>Content</p>
          <p>Counters</p>
        </div>
        <div className="npl_footer-links_div">
          <h4>Company</h4>
          <p>terms & conditions</p>
          <p>Privacy Policy</p>
          <p>info@gmail.com</p>
          <p>18003-13342</p>
        </div>

      </div>
      <div className="npl_footer-copyright">
        <p>2024 NPL-X All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
