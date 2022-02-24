import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: left;
  background-color: #151a22;

  position: sticky;
`;

const Left = () => {
  return <Container>left</Container>;
};

export default Left;
