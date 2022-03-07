import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";

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

const Main = ({ cards }) => {
  useEffect(() => {
    const done = async () => {
      const { data } = await axios.get(``);
    };
    done();
    //
  }, []);

  return (
    <Container>
      {cards.map((item, key) => {
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
