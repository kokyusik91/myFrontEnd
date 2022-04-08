import React from 'react';
import styled from 'styled-components';

const Nesting = () => {
  return (
    <React.Fragment>
      <Thing>How ya doing?</Thing>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing>오우야</Thing>
      <Thing className='something'>The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className='something-else'>
        <Thing>Splendid.</Thing>
      </div>
    </React.Fragment>
  );
};

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;
  /* &는 자기 자신 */
  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }
  /* thing 바로 옆에 있는 녀석만 */
  & + & {
    background: lime; // <Thing> next to <Thing>
  }
  /* 나 자신인데 something이라는 className을 가지고 있는 녀석 */
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  /* className이 something-else인 녀석중에 나 자신 */
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

export default Nesting;
