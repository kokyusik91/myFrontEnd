import React from 'react';

function Contacts() {
  return <div className='Contacts' />;
}

function Chat() {
  return <div className='Chat' />;
}

function SplitPane(props) {
  console.log('props', props);
  return (
    <div className='SplitPane'>
      <div className='SplitPane-left'>{props.left}</div>
      <div className='SplitPane-right'>{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default App;
