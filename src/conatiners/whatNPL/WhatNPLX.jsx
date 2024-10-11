import React from "react";
import '../whatNPL/whatNPL.css'
import { Feature } from "../../Components";
const WhatNPLX = () => {
 <div className="npl_whatNPL section__margin" id="whatnpl" >
   <div className="npl_whatNPL-feature">
    <Feature/>
    
   </div>
   <div className="npl_whatNPL-heading">
    
    <h1 className="gradient-text">The possibilities are beyond your imagination</h1>
    <p>Explore The Library</p>
   </div>

   <div className="npl_whatNPL-container">
    <Feature/>
    <Feature/>
    <Feature/>
   </div>
 </div>
};

export default WhatNPLX;
