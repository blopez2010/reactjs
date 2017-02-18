import React, { Component } from 'react';
import Mapper from './Advance/Mapper';
import Behavior from './Advance/Behavior';
import Compiler from './Advance/JsxLiveCompiler';

class Advance extends Component {
  render() {
    return (
      <div>
        <Mapper />
        <hr/>
        <Behavior />
        <hr/>
        <Compiler />
      </div>
    );
  }
}

export default Advance;