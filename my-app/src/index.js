import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Pics from './components/pics.json'
import './index.css';

ReactDOM.render(
  <App pictures={Pics} />,
  document.getElementById('root')
);