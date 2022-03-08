import React, { useRef, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/contexto";
import confetti from "canvas-confetti";

export const Container = styled.div``;

export const CardHolder = styled.div`
  /* overflow: hidden; */
  width: 180px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.236);
  padding: 0;
  /* max-height: min-content; */
  border-radius: 10px;

  margin: 10px;
  border-radius: 10px;

  /* position: relative; */
`;

export const LittleWindow = styled.div`
  width: auto;
  height: auto;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border: 2px solid rgb(0, 0, 0, 0.2);
  z-index: 2;
  position: absolute;
  color: black;
  cursor: default;
  pointer-events: none;
  padding: 10px;
  display: none;

  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 300px;

  div {
    justify-self: center;
  }
`;

export const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: scale(1);
  transition-duration: 5s;
  border-radius: 10px;

  :hover {
    transform: scale(1.1) rotate(1.2deg);
    cursor: pointer;
  }
`;

export const ImgBadge = styled.img`
  width: 50px;
  height: 50px;

  transform: scale(1);
  transition-duration: 1s;
  margin-top: -30px;
  margin-right: -15px;
  float: right;

  :hover {
    /* transform: scale(1.5) rotate(1.2deg); */
    cursor: pointer;
  }
`;

const Card = ({ nft }) => {
  const ref = useRef();

  function confetis() {
    let duration = 1 * 300;
    let animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min, max) {
      let end = Date.now() + 1 * 300;

      let colors = ["#00bb6d", "#ffffff"];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          // spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          // spread: 20,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }

    randomInRange(0, 0);
  }

  return (
    <Container>
      <CardHolder
        // onClick={async () => {
        //   if (which === "home") {
        //     console.log("home..");
        //   } else if (which === "market" || which === "searcher") {
        //     const account = myInfos.account;
        //     // const value = myInfos.web3.utils.toWei("1");
        //     //adding load screen
        //     // changeVis("flex", "Buying Card");

        //     // if (where === "home") {
        //     //   // ADD HERE SOME OPTIONS TO DO WITH THIS CARDS I OWN
        //     //   console.log("home");
        //     // } else if (where === "market") {
        //     //   console.log("market");
        //     // confetti({
        //     //   particleCount: 100,
        //     //   spread: 70,
        //     //   origin: { y: 0.5, y: 1.2 },
        //     // });

        //     // console.log(card.id.toString());
        //     // console.log(card.price);
        //     // console.log(account);

        //     await myInfos.cards.methods
        //       .buyCardFromMarket(card.id.toString())
        //       .send({ from: account, value: card.price })
        //       .then((error, result) => {
        //         // changeVis("none", "MESSAGE HERE");
        //         <div style={{ zIndex: "9999999999999" }}>confetis();</div>;
        //         setTimeout(() => {
        //           window.location.reload();
        //         }, 2000);
        //       })
        //       .catch((e) => {
        //         console.log("Not accepted by the user");
        //         // changeVis("none", "REJECTED");
        //       });

        //     //
        //   } else {
        //   }

        //   //onclick end
        // }}
        onMouseMove={(e) => {
          ref.current.style.display = "flex";
          ref.current.style.left = `${e.pageX + 10}px`;
          ref.current.style.top = `${e.pageY + 10}px`;
        }}
        onMouseLeave={(e) => {
          ref.current.style.display = "none";
        }}
      >
        <Img src={nft.image} width={"180px"} height={"250px"}></Img>
        {/* <Img
          src={getMetadata() ? getMetadata() : ""}
          width={"180px"}
          height={"280px"}
        ></Img> */}
        {/* {console.log(getMetadata())} */}
        {/* //HARDCODED, CHANGE IT LATER */}
        {/* {card.club.toLowerCase() === "spfc" ? (
          <ImgBadge src="spfc.png" />
        ) : (
          <ImgBadge src="barcelona.png" />
        )} */}
      </CardHolder>
      <LittleWindow
        style={{
          color: "black",
        }}
        ref={ref}
      >
        <div>
          <h3>{nft.name}</h3>
        </div>
        <div>{nft.description}</div>
        <div>
          <br />
          {nft.attributes[0].trait_type}: {nft.attributes[0].value}/
          {nft.attributes[0].max_value}
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.1)",
            height: "2px",
            margin: "10px 0",
          }}
        ></div>
        <div>
          <br />
          {nft.attributes[1].trait_type}: {nft.attributes[1].value}/
          {nft.attributes[1].max_value}
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.1)",
            height: "2px",
            margin: "10px 0",
          }}
        ></div>
        <div>
          <br />
          {nft.attributes[2].trait_type}: {nft.attributes[2].value}/
          {nft.attributes[2].max_value}
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.1)",
            height: "2px",
            margin: "10px 0",
          }}
        ></div>
        <div>
          <br />
          {nft.attributes[3].trait_type}: {nft.attributes[3].value}/
          {nft.attributes[3].max_value}
        </div>

        {/* <div>{nft.attributes.trait_type}</div> */}
        {/* {console.log(nft.attributes[0].trait_type)} */}
        {/* {console.log(nft.attributes)} */}
        {/* <div>{card.title ? card.title : <div></div>}</div>
        <div>{card.owner}</div>
        <div>{card.description}</div>
        <div>price: {parseFloat(card.price) / 10 ** 18}</div>
        <div>id: {card.id}</div>
        <div>club: {card.club}</div>
        <div>
          Create at: {new Date(Number(card.timestamp) * 1000).toTimeString()}
        </div>
        <div>Created By: {card.createdBy}</div>
        <div>Total Amount: {card.totalAmount}</div>
        <br></br> */}
      </LittleWindow>
    </Container>
  );
};

export default Card;
