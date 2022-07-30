import { setupWorker } from 'msw';
import { handlers } from './handlers';

// browser환경에서 서비스 워커 생성해줌.
// yarn add msw --dev
// public에다 서비스 워커 설치 해주기
// npx msw init public/ --save

export const worker = setupWorker(...handlers);
