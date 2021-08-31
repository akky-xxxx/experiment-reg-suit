import React from 'react';
import logo from './logo.svg';
import styled from "styled-components"

function App() {
  return (
    <div>
      <header>
        <Logo src={logo} alt="logo" />
      </header>
      <p>this app created by create react app!</p>
    </div>
  );
}

const Logo = styled.img`
  @media screen and (min-width: 480px) {
    width: 100%;
  }
  @media screen and (max-width: 479px) {
    width: 50px;
  }
`

export default App;
