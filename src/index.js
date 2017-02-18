import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NestedData from './NestedData';
import Title from './Title';
import Events from './Events';

ReactDOM.render(
  <div>
    <Title />
    <App cat={5}/>
    <NestedData />
    <br/>
    <Events />
  </div>,
  document.getElementById('root')
);
