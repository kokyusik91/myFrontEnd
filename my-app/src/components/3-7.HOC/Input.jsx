import React from 'react';
import withLoading from './WithLoading';

const Input = () => {
  return <input defaultValue='input' />;
};

export default withLoading(Input);
