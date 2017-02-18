import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Reference extends Component {
  constructor(params) {
    super()
    this.state = {
      a: ''
    }
  }
  update() {
    this.setState(
      {
        a: this.a.refs.input.value,
        b: this.refs.b.value
      });
  }
  render() {
    return (
      <div>
        <span>Reference</span>
        <br />
        <Input
          ref={component => this.a = component}
          update={this.update.bind(this)}
        /> {this.state.a}
        <hr />
        <input
          ref="b"
          type="text"
          onChange={this.update.bind(this)}
        /> {this.state.b}
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return <div><input ref="input" type="text" onChange={this.props.update} /></div>
  }
}

export default Reference;