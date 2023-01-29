import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title="" />
      <h1 className="headtext__cormorant">Bizga Obuna Bo'ling</h1>
      <p className="p__opensans">So'nggi yangiliklarni o'tkazib yubormang!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder='Emailingizni kiriting' />
      <button className="custom__button">Obuna bo'lish</button>
    </div>
  </div>
);

export default Newsletter;
