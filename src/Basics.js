import React, { Component } from 'react';
import App from './Basics/App';
import NestedData from './Basics/NestedData';
import Title from './Basics/Title';
import Events from './Basics/Events';
import Reference from './Basics/Reference';
import Lifecycle from './Basics/Lifecycle';
import State from './Basics/State';
import Props from './Basics/Props';

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