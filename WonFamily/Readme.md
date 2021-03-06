# 회사 업무 사항

## 2021.01.24

### ⚙️ 전반적인 시스템 셋팅

- Node.js 설치 (홈페이지에서 LTS버전 설치)
- Homebrew 설치
- ms office 설치
- iterm2 설치
- oh my zsh 설치 및 테마 셋팅
- vscode 설치 및 테마 셋팅
- 각종 계정 연동 (notion, slack, 돈톡)
- FTP 프로그램 설치 (FileZila)
- Gitlab 연동
- jetBrain 서비스 설치 webstorm, DataGrip

### 📍 회사 서비스 설명

- 동거동락 서비스(임대인) 전체적인 flow 설명

### 🔨 찾아볼 내용

- FTP 프로그램이란? fileZila 사용법
- GitLab 사용법

---

## 2021.01.25

### ⚙️ 개발 환경 셋팅 내용들

- Eslint 및 Prettier 셋팅 (뭐가 정답인지 모르겠다....).
- DataGrip 연결해서 현재 서비스 데이터베이스에 접근 할수 있다. (SQL 사용해야함)
- LightSail로 현재 서비스 운영중.
- 현재 서비스 서버관련 아키텍쳐 설명을 들었다.

### 🔨 찾아볼 내용

- AWS 서비스중 하나인 LightSail과 EC2의 차이
- CRA을 하더라도 Webpack 설정을 해야하는 이유?
- 리액트 코드 스플리팅
- 리액트에서 반응형 적용 하는 방법들?
- react-router-dom에서 **HashRouter, BrowserRouter, connectedRouter** 차이

## 2021.01.27 (개발시작)

### 오늘 한것

- 작성되어진 스웨거로 request url 작성
- 게시물(post) 전체 요청시 category, page, size를 query String에 포함 시켜 요청함 ` apis/community/?category=${category}&page=${page}&size=${size}` 이런식으로
- axios.interceptor를 이용해서 header에 토큰 고정해서 요청 보냄
- 게시물 조회와 페이지네이션 처리하기 (useEffect, useState, async, await 사용)
- api service layer 작성시 주석에 타입 지정

### 🔨 찾아볼 내용

- queryString ? queryParams ? 차이?
- CORS 이슈 해결방법 프론트에서
- Axios interceptor 용도와 사용방법
- Enums
- useRoutes 확인
- 리액트 파일 구조
- 주석 다는 방법
- webstorm 사용
- AWS EC2 사용하는 방법
- default parameter (자바스크립트 함수 사용)
- react storybook 도입예정
- react component 나누는 방법
- async await 및 promise 활용방법
