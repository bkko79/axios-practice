import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'promise-polyfill'; 
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './Animation.css';

if (!window.Promise) {
  window.Promise = Promise;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
