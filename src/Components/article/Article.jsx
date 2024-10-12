import React from 'react'
import './article.css'
const Article = ({imgUrl, date, text}) => {
  return (
   <div className="npl_blog-container_article section__padding">
    <div className="npl_blog-container_article-image">
      <img src={imgUrl} alt="blog image" />
    </div>
    <div className="npl_blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
   </div>
  )
}

export default Article
