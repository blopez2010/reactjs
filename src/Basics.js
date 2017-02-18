import React, { Component } from 'react';
import App from './App';
import NestedData from './NestedData';
import Title from './Title';
import Events from './Events';
import Reference from './Reference';
import Lifecycle from './Lifecycle';
import State from './State';
import Props from './Props';

class Basics extends Component {
  render() {
    return (
      <div>
        <Title />
        <hr />
        <App cat={5} />
        <hr />
        <NestedData />
        <hr />
        <Events />
        <hr />
        <Reference />
        <hr />
        <Lifecycle />
        <hr />
        <State />
        <hr />
        <Props />
      </div>
    );
  }
}

export default Basics;