/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Emotion2 = () => {
  return (
    <SomeComponent>
      <AnotherComponent />
    </SomeComponent>
  );
};

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: 'underline',
});

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);

export default Emotion2;
