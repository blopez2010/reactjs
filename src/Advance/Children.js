import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
      </Parent>
    );
  }
}

class Parent extends Component {
  render() {
    // let items = React.Children.map(this.props.children, child => child);
    let items = React.Children.toArray(this.props.children)
    //this.props.children.map(child => child);
    console.log(items);

    let only = React.Children.only(this.props.children)
    console.log(only);
    return null;
  }
}


export default App;