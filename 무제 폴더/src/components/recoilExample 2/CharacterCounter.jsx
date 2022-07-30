import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState, charCountState } from './counterStore';
// import CharacterCount from './CharacterCount';

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  // 수정 할수있는 setter를 가지고 있다.
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  // value는 그 값만 꺼내온다.
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCounter;
