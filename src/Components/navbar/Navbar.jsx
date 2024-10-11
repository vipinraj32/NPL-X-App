import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assests/logo.svg'
import './navbar.css'

// BEM = Block Element Modifier


const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  return (
    <div className='npl_navbar'>
      <div className="npl_navbar-links">
        <div className="
        npl_navbar-links_logo"><img src={logo} alt="logo" />
      </div>
      <div div className='npl_navbar-links_container'>
       <p><a href="#home"> Home</a></p>
       <p><a href="#whatnpl">What is NPL-X</a></p>
       <p><a href="#possibility">Open-AI</a></p>
       <p><a href="#features">Case Studies</a></p>
      <p><a href="#blog">Library</a></p>
      </div> 
    </div>
    <div className="npl_navbar-sign">
      <p>Sign-in</p>
      <button type='button'>Sign up</button>
    </div>
    <div className="npl_navbar-menu">
        {toggleMenu
         ? <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/>
 
        }

        {
          toggleMenu && (
            <div className="npl_navbar-menu_container scale-up-center">
              <div className="npl_navbar-menu_container-links">
              <p><a href="#home"> Home</a></p>
              <p><a href="#whatnpl">What is NPL-X</a></p>
              <p><a href="#possibility">Open-AI</a></p>
              <p><a href="#features">Case Studies</a></p>
               <p><a href="#blog">Library</a></p>
                </div>
                <div className="npl_navbar-menu_container-links-sign">
                 <p>Sign-in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            
          )
        }
    </div>

    </div>
  );
}

export default Navbar
