import React from 'react'
import { Article, Brand, Cta, Feature, Navbar } from './Components'
import { Blog,Footer, Header, WhatNPLX, Features,Possibility } from './conatiners'
import './App.css';
import './index.css'
const App = () => {
  
  return (
    <div className='App'>

      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatNPLX/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>

      
    </div>
  )
}

export default App
