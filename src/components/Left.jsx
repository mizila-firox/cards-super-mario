import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: left;
  background-color: rgb(21, 26, 34);

  position: sticky;
  top: 70px;
`;

const Left = () => {
  return <Container>left</Container>;
};

export default Left;
