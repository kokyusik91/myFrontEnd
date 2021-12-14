import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  /* lazy initialize 읽어올때 느리더라도 확실히 읽어오고 다음 실행 */
  const [keyword, setKeyword] = useState(() => {
    console.log('initialize');
    return window.localStorage.getItem('keyword');
  });

  const [result, setResult] = useState('');
  const [typing, setTyping] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    window.localStorage.setItem('keyword', keyword);
  }, [keyword]);

  const handleChange = (event) => {
    /* setItem('keyword','keyword')로 하게되면 하나 밀림 */
    // window.localStorage.setItem('keyword', event.target.value);
    setKeyword(event.target.value);
    setTyping(true);
  };

  const handleClick = () => {
    setTyping(false);
    inputRef.current.value = '';
    setResult(`We find results of ${keyword}`);
  };
  console.log('render');
  return (
    <>
      <input onChange={handleChange} ref={inputRef} value={keyword} />
      <button onClick={handleClick}>search</button>
      {typing ? <p>Looking for.... {keyword}</p> : <p>{result}</p>}
    </>
  );
};

export default App;
