import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Theme = () => {
  const [changeColor, setChangeColor] = useState(theme);

  const handleChangeYellowTheme = () => {
    setChangeColor(yellowTheme);
  };

  const handleChangeGreenTheme = () => {
    setChangeColor(greenTheme);
  };
  return (
    <div>
      <button onClick={handleChangeYellowTheme}>change yellow</button>
      <button onClick={handleChangeGreenTheme}>change green</button>
      <Button>Normal</Button>
      <ThemeProvider theme={changeColor}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
};

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    color: 'palevioletred',
    borderColor: '#ff4949',
  },
};

// Define what props.theme will look like
const theme = {
  color: 'mediumseagreen',
  borderColor: '#0066ff',
};

const greenTheme = {
  color: 'green',
  borderColor: 'green',
};

const yellowTheme = {
  color: 'yellow',
  borderColor: 'yellow',
};

export default Theme;
