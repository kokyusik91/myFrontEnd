import React from 'react';
import styled from 'styled-components';

const OverWriting = () => {
  return (
    <div>
      <Input placeholder='A bigger text input' size='2em' />
      <br />
      {/* Notice we can still use the size attr from Input */}
      <PasswordInput placeholder='A bigger password input' size='2em' />
    </div>
  );
};

const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: 'password',
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

export default OverWriting;
