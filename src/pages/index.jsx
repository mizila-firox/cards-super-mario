import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import styles from "../../styles/Home.module.css";
import { AuthContext } from "../context/contexto";

export default function Home() {
  const { data } = useContext(AuthContext);
  console.log(data);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      somethign
    </div>
  );
}