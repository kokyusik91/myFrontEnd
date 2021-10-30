// store 코드가 엄청 짧아 졌다!
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducer = combineReducers({});
const middlewares = [];
// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

// configureStore에 들어가는 애들
const store = configureStore({
  reducer,
  // 커스텀 미들웨어 장착
  middleware: [...middlewares, ...getDefaultMiddleware],
  devTools: env !== 'production',
});

export default store;
