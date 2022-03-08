import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  background-color: #151a22;

  /* border-bottom: 2px solid #0f1318; */
  /* margin-left: 25px; */
  /* background-color: white; */

  position: sticky;
  top: 0;
  padding-top: 20px;
  padding-left: 25px;
`;

const Header = () => {
  return <Container></Container>;
};

export default Header;
