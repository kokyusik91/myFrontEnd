import React, { useState } from 'react';
/* Submit을 눌러야 유효성 검토를 하는게아닌 시시각각으로 타이핑 할때마다 유효성 검토를 하고 싶다 */

const App = () => {
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleSubmit = (event) => {
    /* form의 기본동작 막는다 */
    event.preventDefault();
  };

  /* 타이핑 할때 하나씩 밀린다 */
  const handleChange = (event) => {
    if (event.target.value.startsWith(0)) {
      setMessage('Phone Number is valid');
      setPhoneNumber(event.target.value);
    } else if (event.target.value.length === 0) {
      setPhoneNumber('');
      setMessage('');
    } else {
      setMessage('Phone Number should starts width 0 ');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='phone'>Phone Number :</label>
        <br />
        <input
          id='phone'
          name='phone'
          onChange={handleChange}
          value={phoneNumber}
        />
        <p>{message}</p>
        <br />
        <br />
        <button
          type='submit'
          disabled={
            !phoneNumber.length === 0 || message !== 'Phone Number is valid'
          }
        >
          Submit
        </button>
        <p>{phoneNumber}</p>
      </form>
    </>
  );
};

export default App;
