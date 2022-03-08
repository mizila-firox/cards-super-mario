import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
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

const MyCards = () => {
  const { cards, setCards, nfts, setNfts } = useContext(AuthContext);

  useEffect(() => {
    const done = async () => {
      const { account, card3 } = await connectEthereum();
      console.log(account);
      console.log(card3);

      const balance = Number(await card3.balanceOf(account));
      console.log(`total balance: ${balance}`);
      setCards([]);
      setNfts([]);

      for (let i = 0; i < balance; i++) {
        const tokenRealId = Number(await card3.tokenOfOwnerByIndex(account, i));
        // const token = await card3.tokenByIndex(tokenRealId);
        const tokenURI = await card3.tokenURI(tokenRealId);

        const { data } = await axios.get(`${tokenURI}`);
        console.log(data);

        setNfts((nfts) => [...nfts, data]);
        // setCards((cards) => ({ ...cards, tokenURI }));
        setCards((cards) => [...cards, tokenURI]);
      }

      //
    };
    done();
  }, []);
  return (
    <Container>
      {nfts.map((item, key) => {
        return <Card key={key} nft={item}></Card>;
      })}
    </Container>
  );
};

export default MyCards;
