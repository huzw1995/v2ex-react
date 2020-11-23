import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@router/routers'
import zhCN from 'antd/es/locale/zh_CN';
import store from '@redux/store'
import { ConfigProvider } from 'antd';
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
  </Provider>
  ,
  document.getElementById('root')
);
