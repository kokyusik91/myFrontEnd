/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css, Global } from '@emotion/react';

const Media = () => {
  return (
    <>
      {/* Global 스타일은 모든 스타일에 영향을 준다. */}
      <Global
        styles={css`
          .some-class {
            color: hotpink !important;
          }
        `}
      />
      <p
        className='some-class'
        css={css`
          /* 420px 이하부터는 font-size : 30px */

          font-size: 30px;
          /* 420px 이상부터는 font-size : 50px */
          @media (min-width: 420px) {
            font-size: 50px;
          }
        `}
      >
        Some text!
      </p>
    </>
  );
};

export default Media;
