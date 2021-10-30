import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const LifeCycle = () => {
  const history = useHistory();
  console.log('마운트 되기 전 실행 ');
  useEffect(() => {
    console.log('useEffect 내부 : ===========마운트 다되었음===========');
    return () => {
      console.log('이 컴포넌트가 사라지면서 실행');
      window.alert('컴포넌트 사라짐, 언마운트');
    };
  });

  const [number, setNumber] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          history.push('/bro');
        }}
      >
        형제 요소로 이동하는 버튼
      </button>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          window.alert('컴포넌트가 리렌더링됨');
        }}
      >
        +1
      </button>
    </>
  );
};

export default LifeCycle;
