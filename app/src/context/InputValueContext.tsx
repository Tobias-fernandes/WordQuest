"use client";

import { useState } from "react";
import { InputContext } from "@/hooks/useInputContext";

// Component responsible for passing the input value of Search component to the context, so that it can be used to filter the words from database

export default function InputContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState<string>("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
}
