"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface UserContextType {
  userName: string | null;
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserNameState] = useState<string | null>(null);

  useEffect(() => {
    const savedName = sessionStorage.getItem("portfolio_user_name");
    if (savedName) {
      setUserNameState(savedName);
    }
  }, []);

  const setUserName = (name: string) => {
    setUserNameState(name);
    sessionStorage.setItem("portfolio_user_name", name);
  };

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
