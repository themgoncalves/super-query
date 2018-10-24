import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Root from './components/root';

const myTheme = {
  breakpoints: {
    xs: 0,
    small: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};
ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <Root />
  </ThemeProvider>
  , document.getElementById('react-app'),
);
