import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { render } from 'react-dom'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'

render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
