import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept();
}
