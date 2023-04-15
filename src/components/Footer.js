import React from 'react';
import { Layout } from 'antd';
import './Footer.css';

const { Footer } = Layout;

const CustomFooter = ({ footerText }) => (
  <div className="Footer-element">
    <Footer className="Footer-footerText">
      {footerText}
    </Footer>
  </div>
);

export default CustomFooter;
