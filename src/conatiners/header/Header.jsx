import React from 'react';
import people from '../../assests/people.png';
import ai from '../../assests/ai.png';
import './header.css';

const Header = () => (
  <div className="npl_header section__padding" id="home">
    <div className="npl_header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with NPL-X</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="npl_header-content_input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="npl_header-content_people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="npl_header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;