import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import { AuthContext } from "../context/contexto";
import { connectEthereum } from "../ethereum";

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

  useEffect(() => {
    const done = async () => {
      const { account, card3 } = await connectEthereum();
      console.log(account);
      console.log(card3);

      const balance = Number(await card3.balanceOf(card3.address));
      setContractCards([]);

      for (let i = 0; i < balance; i++) {
        const tokenRealId = Number(await card3.tokenOfOwnerByIndex(account, i));
        const tokenURI = await card3.tokenURI(tokenRealId);

        const { data } = await axios.get(`${tokenURI}`);

        setContractCards((contractCards) => [...contractCards, tokenURI]);
      }

      //
    };
    done();
  }, []);

  return (
    <Container>
      {contractCards.map((item, key) => {
        return <Card key={key} nft={item}></Card>;
      })}
    </Container>
  );
};

export default Main;
