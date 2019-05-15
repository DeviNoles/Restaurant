import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>© 2019 Dev's Chinese Cuisine<span role='img' aria-label='food'> 🇨🇳 🍜 🍤 Built by Devin Moure -- <a href='http://devinm6.github.io' target="_blank" rel="noopener noreferrer">devinmoure.com</a></span></p>
    </Menu.Item>
  </Menu>
);

export default Footer;
