import React, { Component } from 'react';
import Mapper from './Advance/Mapper';
import Behavior from './Advance/Behavior';
import Compiler from './Advance/JsxLiveCompiler';
import Children from './Advance/Children';
import Extend from './Advance/Extend';
import Reuse from './Advance/Reuse';

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
        <hr/>
        <Reuse />
      </div>
    );
  }
}

export default Advance;