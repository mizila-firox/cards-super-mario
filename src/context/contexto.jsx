import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState("data..");
  return (
    <AuthContext.Provider value={{ data }}>{children}</AuthContext.Provider>
  );
};
