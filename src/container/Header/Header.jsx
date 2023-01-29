import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';
import { images } from '../../constants'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>BeylerBeyi Turkish Restaurant</h1>
      <p className='p__opensans' style={{ margin: '2rem 0', color: '#000' }}>Haqiqiy ta'mni qadrlaydiganlar uchun, mazali Turk taomlariga boy bo'lgan BeylerBeyi restorani.</p>
      <button type='button' className="custom__button">Menyuga o'tish</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
