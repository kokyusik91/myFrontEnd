/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

import styled from '@emotion/styled';

const color = 'white';

const Emotion = () => {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button>나는 고규식이다</Button>
    </>
  );
};

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

export default Emotion;
