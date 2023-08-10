import React from 'react';
import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/Button.styled';
import { Link } from './components/Link.styled';
import { myTheme } from './styles/Theme.styled';

function App() {
  return (
    <div className="App">
      {/* <Menu>
        <ul>
          <li><a href="">menu item 1</a></li>
          <li><a href="">menu item 2</a></li>
          <li><a href="">menu item 3</a></li>
        </ul>
      </Menu> */}

      <Box>
        {/* <StyledBtn as={Link} href={"#"}>LinkComponent</StyledBtn> */}
        {/* <StyledBtn as="a" href={"#"}>Link</StyledBtn> */}
        {/* <StyledBtn color='green' fontSize="40px">Hello</StyledBtn>
        <StyledBtn color='red'>Hello</StyledBtn>
        <StyledBtn fontSize='30px'>Hello</StyledBtn> */}
        <StyledBtn color={myTheme.colors.primary} btnType={"primary"} active>Hello</StyledBtn>
        <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>Hello</StyledBtn>
        {/* <SuperButton>Super Button</SuperButton> */}
        {/* <input type='text' />
        <input type='submit' />
        <input type='radio' />
        <input type='checkbox' /> */}
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`
