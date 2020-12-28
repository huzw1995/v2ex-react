import React from 'react';
import Layouts from '@/layouts/index'
import { ThemeProvider } from '@/theme/context'

export default (props:any) => {
  return (
    <ThemeProvider>
      <Layouts/>
      {props.children}
    </ThemeProvider>
  );
}