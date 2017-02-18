import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NestedData from './NestedData';

// ReactDOM.render(
//   <App cat={5}/>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <App cat={5}/>
    <NestedData />
  </div>,
  document.getElementById('root')
);
