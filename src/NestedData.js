import React, { Component } from 'react';

class NestedData extends Component {
  render() {
    return <Button>I <Heart /> React</Button>
  }
}

const Button = (props) => {
  return (
    <div>
      <span>Nested Data</span>
      <br />
      <button>{props.children}</button>
    </div>
  );
};

class Heart extends Component {
  render() {
    return (
      <span>
        &hearts;
      </span>
    );
  }
}


export default NestedData;