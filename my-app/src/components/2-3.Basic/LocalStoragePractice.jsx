import React from 'react';

const App = () => {
  const data = [
    { id: 1, title: 'fire' },
    { id: 2, title: 'water' },
    { id: 3, title: 'heart' },
    { id: 4, title: 'fire' },
  ];

  const custom = (noun, name) => (
    <>
      <h1>{noun}</h1>
      <h2>{data[1].title}</h2>
      <h3>{name}</h3>
    </>
  );

  return (
    <>
      <h1>hello fkin world</h1>
      {custom('Pipe', '델리만주')}
    </>
  );
};

export default App;
