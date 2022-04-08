import React from 'react';
import styled from 'styled-components';

const StyledComponentsExample = () => {
  const ReversedButton = (props) => {
    console.log(props);
    return <Button {...props} children={props.children.split('').reverse()} />;
  };

  return (
    <>
      <div>
        <Button>Normal Button</Button>
        {/* as a : a 태그로 쓴다. */}
        <Button as='a' href='#'>
          Link with Button styles
        </Button>
        <TomatoButton as='a' href='#'>
          Link with Tomato Button styles
        </TomatoButton>
        <Button as={ReversedButton} hello='ninae'>
          Custom Button with Normal Button styles
        </Button>
      </div>
    </>
  );
};

// 밖으로 빼라
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export default StyledComponentsExample;
