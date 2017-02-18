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
  }

  render() {
    console.log('render');
    return <button onClick={this.update}>{this.state.val}</button>
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

class Wrapper extends Component {
  mount() {
    ReactDOM.render(<Lifecycle />, document.getElementById('b'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('b'))
  }
  render() {
    return (
      <div>
        <span>Life cycle</span>
        <br />
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="b"></div>
      </div>
    );
  }
}


export default Wrapper;