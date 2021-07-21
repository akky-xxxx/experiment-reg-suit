import React from 'react';
import App from './App';

export default {
  title: 'App',
  parameters: {
    screenshot: {
      delay: 200,
    },
  },
};

export const Pc = () => <App />
export const Sp = () => <App />
Sp.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  screenshot: {
    // refer: https://obel.hatenablog.jp/entry/20200127/1580070600
    viewport: "iPhone X",
  },
}
