import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  //화살표 함수로 메서드를 정의하면 좀 더 이쁘다!
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  //화살표 함수로 메서드를 정의하면 좀 더 이쁘다!
  handleClick = (e) => {
    alert(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type='text'
          name='message'
          value={this.state.value}
          placeholder='아무거나 입력해보세요'
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
export default EventPractice;
