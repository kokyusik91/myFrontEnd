import React from 'react';

const CustomDialog = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h5>{props.description}</h5>
    </div>
  );
};

export default CustomDialog;
