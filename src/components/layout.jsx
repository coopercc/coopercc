import React from 'react';
import PropTypes from 'prop-types';
import '../assets/scss/main.scss';

import Header from './Header';

const Template = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
