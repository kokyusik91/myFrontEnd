import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

//1. theme에 해당하는 색상 정보들을 읽어온다.

const Button = ({ children, color, size, outline, fullwidth, ...rest }) => {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullwidth={fullwidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
  // 기본적으로 outline default로 안잡아줘도된다
};

// 색상 관련 스타일
const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${color};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      // 테두리만 있는 버튼을 만들고 싶을때
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

// 사이즈 객체를 따로 만들어줌
const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

// 크기 관련 스타일
const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

// width : 100% 인 버튼
const fullwidthStyle = css`
  ${(props) =>
    props.fullwidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

const StyledButton = styled.button`
  /*  공통 스타일 */
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
  ${sizeStyles}
  ${colorStyles}
  ${fullwidthStyle}
`;
export default Button;
