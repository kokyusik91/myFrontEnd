import React from 'react';
import styled from 'styled-components';
import Button from './Button';

// 어두운 배경 컴포넌트 만들어주기
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: #fff;
  border-radius: 2px;

  //nesting
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup2 = styled.div`
  margin-top: 3rem;
  display: flex;
  /* justify-content: flex-end; */
`;

function Dialog({ title, children, comfirmText, cancelText }) {
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup2>
          <Button color='gray'>{cancelText}</Button>
          <Button color='pink'>{comfirmText}</Button>
        </ButtonGroup2>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
};

export default Dialog;
