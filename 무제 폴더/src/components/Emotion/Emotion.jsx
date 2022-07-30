/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Emotion = () => {
  return (
    <div>
      <header>
        {/* Header 밑에있는 p 태그 */}
        <p css={paragraph}>This is green since it's inside a header</p>
      </header>
      <p css={paragraph}>This is turquoise since it's not inside a header.</p>
    </div>
  );
};

const paragraph = css`
  color: turquoise;
  /* Header 밑에있는 나 자신 선택 */
  header & {
    color: green;
  }
`;

export default Emotion;
