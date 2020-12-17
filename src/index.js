import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@router/routers';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from '@pages/context/context'

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ConfigProvider>,
  document.getElementById('root')
);
