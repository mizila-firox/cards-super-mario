import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: left;
  /* background-color: rgb(21, 26, 34); */
  background-color: rgb(21, 26, 34);

  position: sticky;
  top: 70px;

  color: white;
  font-size: 20px;
  font-family: monospace, "Courier New", Courier;

  text-align: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;

  a {
    width: 100%;
    height: min-content;
    margin-top: 10px;
    :hover {
      color: #2b8000;
    }
  }
`;

const Left = () => {
  return (
    <Container>
      <Link href={"/"}>
        <a>
          <div>Home</div>
        </a>
      </Link>
      <Link href={"/mycards"}>
        <a>
          <div>My Cards</div>
        </a>
      </Link>
    </Container>
  );
};

export default Left;
