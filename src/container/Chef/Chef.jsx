import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Oshpazning so'zi" />
      <h1 className="headtext__cormorant">Biz nimaga ishonamiz</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='p__opensans'>Laborum nisi fuga vel, deserunt numquam mollitia officiis omnis, ipsum ullam at dolorum et qui rerum cupiditate odit necessitatibus dolorem nesciunt veritatis.</p>
      </div>

      <div className="app__chef-sign">
        <p>Chef Bugiman</p>
        <p className="p__opensans">Chef</p>
        <img src={images.sign} alt="sing" />
      </div>
    </div>
  </div>
);

export default Chef;
