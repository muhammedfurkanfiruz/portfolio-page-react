import React from "react";
import styled, { css } from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
// import Contact from "./components/Contact";
 import Feature from "./components/Feature";
// import Footer from "./components/Footer";
// import Intro from "./components/Intro";
// import Navbar from "./components/Navbar";
// import Price from "./components/Price";
// import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  position: relative;
`;
const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color:#f4f7f7;
  top: 158px;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntoShape />
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
    </Container>
  )
}

export default App;
