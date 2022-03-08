import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { AuthContext } from "../context/contexto";

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
`;

const Main = () => {
  const { contractCards, setContractCards } = useContext(AuthContext);

  return (
    <Container>
      {contractCards.map((item, key) => {
        return <Card key={key} nft={item}></Card>;
      })}
    </Container>
  );
};

export default Main;
