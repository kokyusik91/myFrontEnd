import React, { useEffect } from 'react';

const Children = () => {
  console.log('자식요소 마운트 되기전 실행');
  useEffect(() => {
    console.log('자식요소 마운트 된다음 실행');
  });
  return null;
};

export default Children;
