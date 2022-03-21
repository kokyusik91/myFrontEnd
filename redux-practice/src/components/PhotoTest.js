import React from 'react';
import styled from 'styled-components';

const PhotoTest = () => {
  return <Container>포토 테스트</Container>;
};

const Container = styled.div`
  padding: 0 1rem;
`;

const Image = styled.img`
  src: ${(props) => props.src};
`;

export default PhotoTest;
