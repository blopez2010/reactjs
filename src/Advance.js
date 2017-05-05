import React, { Component } from 'react';
import Mapper from './Advance/Mapper';
import Behavior from './Advance/Behavior';
import Compiler from './Advance/JsxLiveCompiler';
import Children from './Advance/Children';
import Extend from './Advance/Extend';

class Advance extends Component {
  render() {
    return (
      <div>
        <Mapper />
        <hr/>
        <Behavior />
        <hr/>
        <Compiler />
        <hr/>
        <Children />
        <hr/>
        <Extend />
      </div>
    );
  }
}

export default Advance;