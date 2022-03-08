import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [contractCards, setContractCards] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        cards,
        setCards,
        nfts,
        setNfts,
        contractCards,
        setContractCards,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
