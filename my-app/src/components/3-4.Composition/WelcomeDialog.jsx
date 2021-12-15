import React from 'react';
import Dialog from './Dialog';
import CustomDialog from './CustomDialog';

export default function WelcomeDialog() {
  return (
    /* Dialog 컴포넌트 안에 있는 엘레멘트들을 props.children으로 받을수 있다 */
    <Dialog>
      <h1>Welcome</h1>
      <h5>Thank you!</h5>
      <CustomDialog title='FUCK' description='hello' />
    </Dialog>
  );
}
