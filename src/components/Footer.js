import React from 'react';
import { Layout } from 'antd';
import './Footer.css';

const { Footer } = Layout;

const CustomFooter = ({ footerText }) => (
  <Footer className="Footer-footerText">
    {footerText}
  </Footer>
);

export default CustomFooter;
