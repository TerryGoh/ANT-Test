import logo from './logo.svg';
//import './App.css';
import SideMenuLayout from './components/SideMenuLayout'
import { CustomTriggerMenu } from './components/CustomTriggerMenu'
import React, { useState } from 'react';
import './App.css';
import { Layout, Avatar, Menu,  Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import Icon from '@ant-design/icons';
import 'antd/dist/antd.css';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <SideMenuLayout/>
      );
}

export default App;
