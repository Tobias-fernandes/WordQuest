"use client";

import { useState } from "react";
import { DataContext } from "@/hooks/useChangeDataContext";
import { initialWords } from "@/data/data";

export default function DataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [add, setAdd] = useState(initialWords.party);
  console.log(initialWords.party);
  return (
    <DataContext.Provider value={{ add, setAdd }}>
      {children}
    </DataContext.Provider>
  );
}
