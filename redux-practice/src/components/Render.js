import React, { useEffect, useState } from 'react';

const Render = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  // console.log('컴포넌트 마운트 되기전!!!');
  useEffect(() => {
    console.log('effect');
    // console.log({ name, nickname });
    console.log(name);
    return () => {
      console.log('clean-up');
      console.log(name);
    };
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };
  return (
    <>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickName} />
      <h1>이름 : {name}</h1>
      <h1>닉네임 : {nickname}</h1>
    </>
  );
};

export default Render;
