import { PropsWithChildren, createContext, useState } from "react";

type UserName = {
  username: string;
  setUsername: string;
};

type UserId = {
  id: string;
  setId: string;
};

interface userContextType {
  username: string;
  id: string;
  setId: string;
  setUsername: string;
}
export const UserContext = createContext<userContextType | undefined | object>(
  {}
);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [username, setUsername] = useState<UserName | null>(null);
  const [id, setId] = useState<UserId | null>(null);

  const contextValue = {
    username,
    setUsername,
    id,
    setId,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
