import React, { useEffect, useState } from 'react';

const Keypress = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = (e) => {
    alert(`${username} : ${message}`);
    setUsername('');
    setMessage('');
  };

  //엔터를 쳤을때 클릭했을때의 함수를 호출한다.
  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type='text'
        name='username'
        placeholder='사용자명'
        onChange={changeUsername}
      />
      <input
        type='text'
        name='message'
        placeholder='메세지를 입력하세요!'
        onChange={changeMessage}
        onKeyPress={handleKeypress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default Keypress;
