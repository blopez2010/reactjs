import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div>
        <span>Title</span>
        <br />
        <TitleComponent text="123456" />
      </div>
    )
  }
}

const TitleComponent = (props) => {
  return <h1>Title: {props.text}</h1>
};

TitleComponent.propTypes = {
  text(props, propName, component) {
    if (!(propName in props)) {
      return new Error(`missing ${propName}`)
    }
    if (props[propName].length < 6) {
      return new Error(`${propName} was to short`)

    }
  }
};

export default Title;