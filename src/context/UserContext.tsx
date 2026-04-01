"use client";

import React, { createContext, useContext, useState } from "react";

interface UserContextType {
  userName: string | null;
  setUserName: (name: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userName, setUserNameState] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("portfolio_user_name");
  });

  const setUserName = (name: string) => {
    setUserNameState(name);
    localStorage.setItem("portfolio_user_name", name);
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
