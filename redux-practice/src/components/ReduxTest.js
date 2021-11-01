import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../redux/modules/userSlice';

const ReduxTest = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };

  return (
    <>
      <button onClick={onLogOut}>⌚️로그아웃</button>
    </>
  );
};

export default ReduxTest;
