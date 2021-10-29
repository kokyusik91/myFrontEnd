import './App.css';
import Button from './Button';
import styled, { ThemeProvider } from 'styled-components';
import Dialog from './Dialog';
import CounterHook from './CounterHook';
import Say from './Say';

//app component에서 색상 선언후 어떤 컴포넌트에서도 쓸 수 있게 만든다.
//1. ThemeProvider를 import 해온후
//2. App Component를 감싸준다.
//3. palette라는 변수를 만들어준다.
//4. themeProvider에 theme이라는 객체안에 {palette}를 넣어준다.

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#0066ff',
  gray: '#496057',
  pink: '#f06595',
  darkblue: '#0066ff',
};

function App() {
  return (
    <Say />
    // <ThemeProvider theme={{ palette }}>
    //   <AppBlocking>
    //     <ButtonGroup>
    //       <Button color='pink' size='large'>
    //         BUTTON
    //       </Button>
    //       <Button>BUTTON</Button>
    //       <Button color='gray' size='small'>
    //         BUTTON
    //       </Button>
    //     </ButtonGroup>
    //     <ButtonGroup>
    //       <Button color='pink' size='large' outline>
    //         BUTTON
    //       </Button>
    //       <Button outline>BUTTON</Button>
    //       <Button color='gray' size='small' outline>
    //         BUTTON
    //       </Button>
    //     </ButtonGroup>
    //     <ButtonGroup>
    //       <Button color='pink' size='large' fullwidth>
    //         BUTTON
    //       </Button>
    //       <Button fullwidth size='large'>
    //         BUTTON
    //       </Button>
    //       <Button color='gray' size='large' fullwidth>
    //         BUTTON
    //       </Button>
    //     </ButtonGroup>
    //     {/* <Dialog
    //       title='정말로 삭제하시겠습니까?'
    //       comfirmText='삭제'
    //       cancelText='취소'
    //     >
    //       데이터를 정말로 삭제하시겠습니까?
    //     </Dialog> */}
    //   </AppBlocking>
    // </ThemeProvider>
  );
}

const AppBlocking = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

export default App;
