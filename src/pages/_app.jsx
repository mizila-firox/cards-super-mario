import "../../styles/globals.css";
import { AuthProvider } from "../context/contexto";

import styled from "styled-components";
import Left from "../components/Left";
import Header from "../components/Header";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-rows: 70px calc(100vh - 70px);
  grid-template-areas:
    "header header"
    "left main";
  overflow-x: hidden;
`;

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Container>
        <Header></Header>
        <Left></Left>
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  );
}

export default MyApp;
