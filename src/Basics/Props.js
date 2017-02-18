import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UpdateProps extends Component {
  constructor() {
    super();
    this.state = { increasing: false }
  }

  update() {
    ReactDOM.render(
      <UpdateProps val={this.props.val + 1} />,
      document.getElementById('root')
    )
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  render() {
    console.log(this.state.increasing);
    return (
      <div>
        <span>Props</span>
        <br />
        <button onClick={this.update.bind(this)}>{this.props.val}</button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }

}

UpdateProps.defaultProps = {
  val: 0
}

export default UpdateProps;