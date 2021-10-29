import React from 'react';
import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  // constructor(props) {
  //   super(props);
  // // state의 초기값 설정
  // this.state = {
  //   number: 0,
  //   fixedNumber: 0,
  // };
  // }
  render() {
    const { number, fixedNumber } = this.state;
    console.log('콘솔 밖', number);
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log('setState가 실행되었습니다.');
              console.log('이제 숫자가 안밀릴듯합니다!', this.state.number);
            });
            // this.setState({ number: this.state.number + 1 });
            // // 콘솔을 찍으면 1씩 밀림;
            // console.log('온클릭 함수 안', number);

            // setState 두번 실행하기
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState) => ({
            //   number: prevState.number + 1,
            // }));
            // console.log(number);
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
