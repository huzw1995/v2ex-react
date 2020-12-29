import React from 'react';
import Layouts from '@/layouts/index'
import { ThemeProvider } from '@/theme/context'
import { Redirect } from 'umi';

export default (props:any) => {
  return (
    <Redirect
      to={{
        pathname: '/home/0',
        state: {},
      }}
  />
  );
}