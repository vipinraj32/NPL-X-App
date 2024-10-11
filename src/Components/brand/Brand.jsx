import React from 'react'
import { google, dropbox, shopify ,slack } from './import'
import './brand.css'
const Brand = () => {
  return (
    <div className="npl_brand section_padding" >
      <div className="">
        <img src={google} alt="google" />

      </div>
      <div className="">
        <img src={slack} alt="slack" />

      </div>
      <div className="">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div className="">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand
