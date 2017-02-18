import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    };
  }

  update(e ){
    this.setState({txt: e.target.value});
  }

  render() {
    return <div>
        <h1>{this.state.txt} - {this.state.cat}</h1>
        <Widget update={this.update.bind(this)}></Widget>
      </div>
  }
}

const Widget = (props) => <input type="text" onChange={props.update}/>

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}

export default App;