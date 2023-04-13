import React from 'react';
import './Header.css';
import { PageHeader } from '@ant-design/pro-layout';

const Header = ({ title }) => (
  <PageHeader
    className="Header-pageHeader"
    title={<span className="Header-title">{title}</span>}
  />
);

export default Header;
