import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './card'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
    <Card />,
    document.getElementById('deck')
);
