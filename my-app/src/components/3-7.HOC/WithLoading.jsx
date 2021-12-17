import React, { useState, useEffect } from 'react';

function WithLoading(Component) {
  // HOC 영역
  const WidthLoadingComponent = (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);
    return loading ? <p>로딩중</p> : <Component {...props} />;
  };

  return WidthLoadingComponent;
}

export default WithLoading;

/* 재 사용성을 위한 리액트의 고민 */
