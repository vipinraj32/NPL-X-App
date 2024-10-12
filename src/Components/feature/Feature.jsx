import React from 'react'
import './feature.css'
const Feature = ({title,text}) => {
  return (
     <div className="npl_features-container_feature">
      <div className="npl_features-container_feature-title">
        <div />
          <h1>{title}</h1>
      </div>
      <div className="npl_features-container_feature-text">
        {text}
      </div>
      </div>
  )
}

export default Feature
