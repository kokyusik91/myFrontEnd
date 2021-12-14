import React, { useEffect, useState } from 'react';

const Parent = () => {
  const [name, setName] = useState('');
  const [click, setClick] = useState(false);
  console.log('Parents render');
  useEffect(() => {
    console.log('Parents useEffect');
    if (click) setName('name Changed');
    else setName((prev) => 'This original name');
  }, [click]);

  return (
    <>
      <div>{name}</div>
      <Child name={name} setClick={setClick} click={click} />
      {click ? <h1>Hello to myself</h1> : <h2>만나서 반가워요!</h2>}
    </>
  );
};

export default Parent;

const Child = (props) => {
  console.log('   Child render');
  const { name, click, setClick } = props;
  console.log('child', name, click);
  const handleClick = () => {
    setClick((prev) => !prev);
  };
  return <button onClick={handleClick}>{name}</button>;
};
