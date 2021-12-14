import React, { useState, useEffect } from 'react';

/* Child 컴포넌트 */
const Child = () => {
  console.log('   Child render start');
  const [text, setText] = useState(() => {
    console.log('   Child useState');
    return '';
  });

  useEffect(() => {
    console.log('   Child useEffect no deps');

    return () => {
      console.log('   Child useEffect [Cleanup], no deps');
    };
  });
  useEffect(() => {
    console.log('   Child useEffect empty');

    return () => {
      console.log('   Child useEffect [Cleanup], empty');
    };
  }, []);
  useEffect(() => {
    console.log('   Child useEffect [text]');

    return () => {
      console.log('   Child useEffect [Cleanup], [text]');
    };
  }, [text]);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const element = (
    <>
      <input onChange={handleChange} />
      <p>{text}</p>
    </>
  );
  console.log('   Child render end');
  return element;
};

/* 부모 컴포넌트 */
const App = () => {
  console.log('App render start');
  const [show, setShow] = useState(() => {
    console.log('App useState call');
    return false;
  });

  useEffect(() => {
    console.log('App useEffect no deps');

    return () => {
      console.log('App useEffect [Cleanup], no deps');
    };
  });
  useEffect(() => {
    console.log('App useEffect empty');

    return () => {
      console.log('App useEffect [Cleanup], empty');
    };
  }, []);
  useEffect(() => {
    console.log('App useEffect [show]');

    return () => {
      console.log('App useEffect [Cleanup], [show]');
    };
  }, [show]);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  console.log('App render end');
  return (
    <>
      <button onClick={handleClick}>search</button>
      {show ? <Child /> : null}
    </>
  );
};

export default App;

/* 처음 렌더링 */
/* App render Start */
/* App useState Call */
/* App render end */
/* App useEffect no deps */
/* App useEffect empty */
/* App useEffect [show] */

/* 버튼 눌러서 Child 컴포넌트가 생성될때 */
/* App render Start */
/* App render end */
/*    Child render Start */
/*    Child useState */
/*    Child render End */
/* App useEffect [Cleanup], no deps */
/* App useEffect [Cleanup], [show] */
/*    Child UseEffect no deps */
/*    Child UseEffect empty */
/*    Child UseEffect [text] */
/* App useEffect empty */
/* App useEffect [show] */

/* Input창에 값 입력 */
/*    Child render Start */
/*    Child render End */
/*    Child UseEffect [Cleanup], no deps */
/*    Child UseEffect [Cleanup], [text] */
/*    Child UseEffect no deps */
/*    Child UseEffect [text] */

/* 버튼 눌러서 Child 컴포넌트가 사라질때 */
/* App render Start */
/* App render end */
/*    Child UseEffect [Cleanup], no deps */
/*    Child UseEffect [Cleanup], empty */
/*    Child UseEffect [Cleanup], [text] */
/* App useEffect [Cleanup], no deps */
/* App useEffect [Cleanup], [show] */
/* App useEffect empty */
/* App useEffect [show] */
