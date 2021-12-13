import React from 'react';

function Event() {
  const handleButtonClick = () => {
    console.log('handleButtonClick');
  };

  const handleClickCapture = () => {
    console.log('handleClickCapture');
  };

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2');
  };

  const handleClickBubble = () => {
    console.log('handleClickBubble');
  };
  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onclick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>
  );
}

export default Event;
