import React from 'react';
import { ThemeProvider } from '@/theme/context'
import NavHeader from '@/components/navHeader'

export default function(props: any) {
  return (
    <ThemeProvider>
      <NavHeader/>
      {props.children}
    </ThemeProvider>
  )
}
