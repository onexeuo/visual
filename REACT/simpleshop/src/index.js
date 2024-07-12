import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './sub/Header';
import Footer from './/sub/Footer';
import ListApple from './sub/ListApple';

import {BrowserRouter} from 'react-router-dom'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <ListApple />
    <Footer />
  </BrowserRouter>
);

