import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const delay =
  '뭐시기뭐시기 setTimeout으로 몇초 있다가 결과를 보내줄 함수 서버 흉내내기 위해서';
// 우리가 미들웨어에서 동작하던것 하면됨 예를들어 axios 요청
// getState()로 다른 state에 접근하던가.
export const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  // thunkAPI 용도는 getState접근 혹은 history같은것
  // const state= thunkAPI.getState();
  // state.user.data //접근 가능
  // 추가로 axios 요청등이 가능하다.
  // createAsyncThunk에서는 try catch 쓰지말자!

  // axios 같은 비동기 통신 작업을 한다.
  const response = await axios.post(`user/post/`, data);
  if (response) {
    // return으로 성공으로 받으면 fullfilled로 넘어간다.
    return response.data;
  }
});
