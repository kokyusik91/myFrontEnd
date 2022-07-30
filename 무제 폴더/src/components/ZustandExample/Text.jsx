import React, { useState } from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  fontSize: 14,
  // set을 사용해서 기존 값을 수정할 수 있다.
  increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + 1 })),
}));

const Text = () => {
  const fontSize = useStore((state) => state.fontSize);
  const increaseFontSize = useStore((state) => state.increaseFontSize);
  return (
    <>
      <p style={{ fontSize }}>This text will increase in size too.</p>
      <button onClick={increaseFontSize}>size up</button>
    </>
  );
};

export default Text;
