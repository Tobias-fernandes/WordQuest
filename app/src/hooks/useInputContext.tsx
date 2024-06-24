import { createContext, useContext } from "react";
import { IInputContext } from "@/@Types/types";
import { initialWords } from "@/data/data";

export const InputContext = createContext({} as IInputContext); // Create a context to store the input value

// This hook is responsible for returning the context of the input value
export default function useInputContext() {
  const context = useContext(InputContext);
  return useContext(InputContext);
}
