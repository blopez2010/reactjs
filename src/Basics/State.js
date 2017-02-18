import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends Component {
  constructor() {
    super();
    this.state = { val: 0 }
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ val: this.state.val + 1 });
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.setState({ m: 2 });
  }

  render() {
    console.log('render');
    return <button onClick={this.update}>
      {this.state.val * this.state.m}
    </button>
  }

  componentDidMount() {
    console.log('componentDidMount')
    // console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }
}

class Wrapper extends Component {
  mount() {
    ReactDOM.render(<Lifecycle />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <span>State</span>
        <br />
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    );
  }
}


export default Wrapper;