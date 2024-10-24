import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
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
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 55% 100%);
  background-color: #00ff99;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 35% 100%, 0 100%);
  background-color: darkblue;
`;
const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 35% 0, 35% 100%, 0 100%);
  background-color: #00ff99;
`;
const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(35% 0, 100% 0, 100% 100%, 65% 100%);
  background-color: darkblue;
`;

const App = () => {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default App;
