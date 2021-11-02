import { buildQueries } from '@testing-library/dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render (
  <React.StrictMode>
    < App />
  </React.StrictMode>,
  document.getElementById('root')
);