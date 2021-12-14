import React, { useState, useRef } from 'react';

const App = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');
  const [typing, setTyping] = useState(false);

  const inputRef = useRef(null);
  const handleChange = (event) => {
    setKeyword(event.target.value);
    setTyping(true);
  };

  const handleClick = () => {
    setTyping(false);
    inputRef.current.value = '';
    setResult(`We find results of ${keyword}`);
  };

  return (
    <>
      <input onChange={handleChange} ref={inputRef} />
      <button onClick={handleClick}>search</button>
      {typing ? <p>Looking for.... {keyword}</p> : <p>{result}</p>}
    </>
  );
};

export default App;
