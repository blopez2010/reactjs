import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './JsxLiveCompiler.css'

class JsxLiveCompiler extends Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel.transform(code, {presets: ['es2015', 'react']}).code,
        err: ''
      });
    } catch (err) {
      this.setState({err: err.message});
    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea
          onChange={this.update.bind(this)}
          defaultValue={this.state.input}></textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    );
  }
}

class Compiler extends Component {
  loadCompiler() {
    ReactDOM.render(<JsxLiveCompiler />, document.getElementById('compiler'))
  }
  unmountCompiler() {
    ReactDOM.unmountComponentAtNode(document.getElementById('compiler'))
  }
  render() {
    return (
      <div>
        <span>JsxLiveCompiler</span>
        <br/>
        <button onClick={this.loadCompiler.bind(this)}>Load Compiler</button>
        <button onClick={this.unmountCompiler.bind(this)}>Unload Compiler</button>
        <div id="compiler"></div>
      </div>
    );
  }
}

export default Compiler;