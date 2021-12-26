import React from 'react';
import Dialog from './Dialog';

const ThankyouDialog = () => {
  return (
    <Dialog
      title={<h1 style={{ color: 'purple' }}>Thanks</h1>}
      description='Thank you for visiting'
      button={
        <button style={{ backgroundColor: 'blue', color: 'white' }}>
          close
        </button>
      }
    />
  );
};

export default ThankyouDialog;
