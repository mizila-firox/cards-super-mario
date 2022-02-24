import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: left;
  background-color: blue;
`;

const Left = () => {
  return <Container>left</Container>;
};

export default Left;
