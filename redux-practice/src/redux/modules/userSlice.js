import { createSlice } from '@reduxjs/toolkit';
import { logIn } from '../async/user';

const initialState = {
  isLoggingIn: false,
  data: null,
};

// postSlice면 name은 post 이런 느낌으로 통일성을 맞추자.
const userSlice = createSlice({
  name: 'user',
  // initialState를 넣어준다.
  initialState: initialState,
  // 동기Action이 들어가는 곳
  reducer: {
    //로그아웃이 동기작업이라고 가정하고 reducer 안에 넣어줌
    logOut(state, action) {
      state.data = null;
    },
  },
  // 네트워크 요청!
  extraReducers: {
    // createAsyncThunk에 있던 함수 logIn
    [logIn.pending]: (state, { payload }) => {
      state.isLoggingIn = true;
    },
    // 원래 이렇게씀 action.payload + immer들이 자동 적용 되있어서 state로 접근하면 된다.
    [logIn.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    // 축약형 payload
    [logIn.rejected]: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export default userSlice;
