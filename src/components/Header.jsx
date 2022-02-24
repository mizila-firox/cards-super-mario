import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color: #ff3700;

  border-bottom: 2px solid #f2f2f2;
  /* margin-left: 25px; */
  /* background-color: white; */

  position: sticky; // See link
  top: 0; //to make it stick to the top of the screen
  padding-top: 20px;
  padding-left: 25px;
`;

const Header = () => {
  return <Container>Header</Container>;
};

export default Header;
