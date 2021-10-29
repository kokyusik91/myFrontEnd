import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');
  const onIn = () => {
    setMessage('어서 오세요!');
  };
  const onOut = () => {
    setMessage('안녕히 가세요!');
  };

  const makeRed = () => {
    setColor('#ff4949');
  };
  const makeBlue = () => {
    setColor('#0066ff');
  };
  const makeGreen = () => {
    setColor('green');
  };

  return (
    <>
      <button onClick={onIn}>입장</button>
      <button onClick={onOut}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>
      <button style={{ color: '#ff4949' }} onClick={makeRed}>
        빨간색
      </button>
      <button style={{ color: '#0066ff' }} onClick={makeBlue}>
        파란색
      </button>
      <button style={{ color: 'green' }} onClick={makeGreen}>
        초록색
      </button>
    </>
  );
};

export default Say;
