import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Router from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root') // faz a conversão do "HTML", para o DOOM, permitindo que eu tenha apenas um arquivi.html
);
