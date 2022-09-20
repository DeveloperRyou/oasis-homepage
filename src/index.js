import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import './fonts/fonts.scss';
import './scss/default.scss';
import './scss/index.scss';
import './scss/btn.scss';
import './scss/about.scss';
import './scss/nft.scss';
import './scss/faq.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
