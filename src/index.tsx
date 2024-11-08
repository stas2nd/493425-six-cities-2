import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CARDS } from './consts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cards={CARDS}></App>
  </React.StrictMode>
);
