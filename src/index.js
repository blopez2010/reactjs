import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Basics from './Basics';
import Advance from './Advance';

class Main extends Component {
  mountBasics() {
    ReactDOM.unmountComponentAtNode(document.getElementById('advance'))
    ReactDOM.render(<Basics />, document.getElementById('basics'))
  }
  mountAdvance() {
    ReactDOM.unmountComponentAtNode(document.getElementById('basics'))
    ReactDOM.render(<Advance />, document.getElementById('advance'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mountBasics.bind(this)}>Mount Basics</button>
        <button onClick={this.mountAdvance.bind(this)}>Mount Advance</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);