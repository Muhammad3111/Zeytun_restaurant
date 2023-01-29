import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { TbBrandTelegram } from 'react-icons/tb'
import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Aloqa</h1>
        <p className="p__opensans">Namangan shahar, A.Timur ko'chasi - 7uy</p>
        <p className="p__opensans"><a href='tel:+998552550002'>+998552550002</a></p>
        <p className="p__opensans"><a href="tel:+998336150002">+998336150002</a></p>
      </div>
      <div className="app__footer-links_logo">
        <h1 className='headtext__cormorant'>BeylerBeyi</h1>
        <p className="p__opensans">"Bizni ijtimoiy tarmoqlarda kuzating.”</p>
        <img src={images.spoon} alt="spoon__img" />
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/profile.php?id=100089791231564&mibextid=LQQJ4d' target="_blank" rel='noreferrer'><FiFacebook /></a>
          <a href='https://t.me/+rMuDq8HpYHoyZGE9' target="_blank" rel='noreferrer'><TbBrandTelegram /></a>
          <a href='https://instagram.com/beylerbeyi.restaurant?igshid=YmMyMTA2M2Y=' target="_blank" rel='noreferrer'><FiInstagram /></a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Ish Vaqtimiz</h1>
        <p className="p__opensans">Har kuni:</p>
        <p className="p__opensans">07:00 dan -00:00 gacha</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 BeylerBeyi. Barcha xizmatlar litsenziyalangan.</p>
    </div>
  </div>
);

export default Footer;
