import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@router/routers'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router />
  </ConfigProvider>
  ,
  document.getElementById('root')
);
