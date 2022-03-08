import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [nfts, setNfts] = useState([]);

  return (
    <AuthContext.Provider value={{ cards, setCards, nfts, setNfts }}>
      {children}
    </AuthContext.Provider>
  );
};
