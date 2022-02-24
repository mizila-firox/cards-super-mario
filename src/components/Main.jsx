import React from "react";
import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  grid-area: main;
  background-color: yellow;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  /* align-content: initial; */

  /* margin: 0;
  padding: 0; */
`;

const Main = () => {
  return (
    <Container>
      {new Array(10).fill().map((item, key) => {
        return (
          <Card key={key} card={""} NFT={""}>
            q
          </Card>
        );
      })}
    </Container>
  );
};

export default Main;
