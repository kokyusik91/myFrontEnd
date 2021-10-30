import React, { useEffect } from 'react';

const Brother = () => {
  console.log('형재요소 마운트 되기전 실행');
  useEffect(() => {
    console.log('형재요소 마운트 된다음 실행');
  });
  return (
    <>
      <div></div>
    </>
  );
};

export default Brother;
