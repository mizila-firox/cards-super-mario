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

      // const ownerOf = await card3.tokenURI(0);
      const ownerOf = await card3.ownerOf(1);

      // console.log(ownerOf);
      // console.log(card3);

      const balance = Number(
        await card3.balanceOf("0xFF8E19BE33A5B8A68bdf20a36005bF9643B5563a")
      );
      console.log(`contract balance: ${balance}`);
      setContractCards([]);

      for (let i = 0; i < balance; i++) {
        const tokenRealId = Number(
          await card3.tokenOfOwnerByIndex(
            "0xFF8E19BE33A5B8A68bdf20a36005bF9643B5563a",
            i
          )
        );
        // const token = await card3.tokenByIndex(tokenRealId);
        const tokenURI = await card3.tokenURI(tokenRealId);

        const { data } = await axios.get(`${tokenURI}`);
        // console.log(data);

        setContractCards((contractCards) => [...contractCards, data]);
        // setContractCards([]);
      }

      //
    };
    done();
  }, []);

  return (
    <Container>
      {console.log(contractCards)}
      {contractCards.map((item, key) => {
        return <Card key={key} nft={item}></Card>;
      })}
    </Container>
  );
};

export default Main;
