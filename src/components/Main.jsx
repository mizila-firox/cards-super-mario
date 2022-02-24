import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  background-color: yellow;
`;

const Main = () => {
  return <Container>Main</Container>;
};

export default Main;
