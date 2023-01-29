import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Aloqa" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Bo'glanish uchun</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Namangan shahar, A.Timur ko'chasi - 7uy</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Ish Vaqtimiz</p>
        <p className="p__opensans">Har kuni: 07:00 dan - 00:00 gacha</p>
      </div>
      <button type='button' className="custom__button" style={{ marginTop: "2rem" }}>Tashrif Buyuring</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
