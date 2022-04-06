import React from 'react';

/* 전역 변수 */
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

/* 현재 Mon Dec 13 2021 10:33:18 GMT+0900를 년.월.일 로 바꾸어주는 함수*/
function formatDate(date) {
  console.log('date', date);
  return date.toLocaleDateString();
}

export default function Extraction() {
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  );
}

function Comment(props) {
  console.log('props', props);
  return (
    <div className='Comment'>
      <UserInfo user={props.author} />
      <div className='Comment-text'>{props.text}</div>
      <div className='Comment-date'>{formatDate(props.date)}</div>
    </div>
  );
}
// hello

// 컴포넌트로 따로 빼서 관리 Extraction
function UserInfo(props) {
  console.log('UserInfo', props);
  return (
    <div className='UserInfo'>
      <Avartar user={props.user} />
      <div className='UserInfo-name'>{props.user.name}</div>
    </div>
  );
}

// 컴포넌트로 따로 빼서 관리 Extraction
function Avartar(props) {
  console.log('Avartar', props);
  return (
    <img className='Avatar' src={props.user.avatarUrl} alt={props.user.name} />
  );
}
