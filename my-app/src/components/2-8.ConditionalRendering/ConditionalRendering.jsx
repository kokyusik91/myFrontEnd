import React from 'react';

function UserGreeting(props) {
  return (
    <h1>
      {/* 할당하는 값에도 삼항을 쓸 수 있다. */}
      {props.name && props.name + ','} Welcome{' '}
      {Boolean(props.count) && `It's ${props.count} times`}
      {/* {props.count ? `It's ${props.count} times` : null} */}
    </h1>
  );
}

function GuestGreeting(props) {
  return <h1>Please Sign up.</h1>;
}

const Greeting = (props) => {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name='kyusik' count={0} />;
  // }
  // return <GuestGreeting />;
  // 삼항 연산자
  return props.isLoggedIn ? (
    <UserGreeting name='kyusik' count={0} />
  ) : (
    <GuestGreeting />
  );
};

export default function ConditionalRendering() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
