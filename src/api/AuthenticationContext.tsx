import React, { ReactElement } from "react";

type TokenType = {
  login: (email: string, password: string) => Promise<undefined>;
  logout: () => void;
  isLoggedIn: boolean;
  refreshAccess: () => void;
  loading: boolean;
};

const TokenContext = React.createContext<TokenType>({} as TokenType);

const AuthTokenProvider = ({ children }: { children: ReactElement }) => {
  const loading = false;

  async function login(email: string, password: string) {
    return undefined;
  }

  const logout = () => {};

  const refreshAccess = () => {};

  const isLoggedIn = true;
  const tokenContextValue = {
    login,
    logout,
    isLoggedIn,
    refreshAccess,
    loading,
  };

  return (
    <TokenContext.Provider value={tokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
};

const useAuth = () => React.useContext(TokenContext);

export { AuthTokenProvider, useAuth };
