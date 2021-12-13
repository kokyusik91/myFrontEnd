import React, { useState } from 'react';

function ControlledComponent() {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState(
    'Please write an essay about your favorite DOM element.'
  );
  const handleChange = (event) => {
    const name = event.target.name;
    if (name === 'name') {
      setName(event.target.value);
    }
    if (name === 'essay') {
      setName(event.target.value);
    }
    if (name === 'flavor') {
      setName(event.target.value);
    }
    // setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`name : ${name}, essay : ${essay}`);
    event.preventDefault();
  };

  // const handleEssayChange = (event) => {
  //   setEssay(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name='name' type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        {/* <textarea value={essay} onChange={handleEssayChange} /> */}
        <textarea name='essay' value={essay} onChange={handleChange} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default ControlledComponent;
