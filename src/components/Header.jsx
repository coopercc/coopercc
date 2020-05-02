import React from 'react';

import Footer from './Footer';
import avatar from '../assets/images/avatar.jpg';

const Header = () => (
  <header id="header">
    <div className="inner">
      <img className="image avatar" src={avatar} alt="My Face" />
      <h1>
        <strong>I&apos;m Cooper Cain</strong>
        , a Frontend Engineer
        <br />
        {' '}
        currently working at GoDaddy
      </h1>
    </div>
    <Footer />
  </header>
);

export default Header;
