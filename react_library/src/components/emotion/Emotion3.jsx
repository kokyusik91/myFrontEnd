/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const Emotion3 = () => {
  return (
    <div>
      <div css={base}>This will be turquoise</div>
      <div css={[danger, base]}>
        This will be also be turquoise since the base styles overwrite the
        danger styles.
      </div>
      <div css={[base, danger]}>This will be red</div>
    </div>
  );
};

// op
const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

export default Emotion3;
