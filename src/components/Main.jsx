import React from "react";
import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  grid-area: main;
  background-color: #31373f;
  /* height: 100vh calc(100vh - 70px); */
  height: fit-content;
  min-height: calc(100vh - 70px);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
