import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { currentUserIDState, currentUserNameQuery } from './store';
import ErrorBoundary from './ErrorBoundary';

// const tableOfUsers = [{ name: 'jimmy' }, { name: 'choi' }];

export const CurrentUser = () => {
  const userName = useRecoilValue(currentUserNameQuery);
  const [id, setId] = useRecoilState(currentUserIDState);
  return (
    <>
      <div>{userName}</div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
    </>
  );
};

export default function CurrentUserInfo() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading....</div>}>
        <CurrentUser />
      </React.Suspense>
    </ErrorBoundary>
  );
}
