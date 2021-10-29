import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  changePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    // 클릭하면 input태그로 focus가 넘어갑니다.
    this.input.focus();
  };

  render() {
    return (
      <>
        <input
          ref={(ref) => (this.input = ref)}
          type='password'
          value={this.state.password}
          onChange={this.changePassword}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ' '
          }
        />
        <button onClick={this.onClick}>validation</button>
      </>
    );
  }
}

export default ValidationSample;
