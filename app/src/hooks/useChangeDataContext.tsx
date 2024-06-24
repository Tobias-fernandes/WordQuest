import { createContext, useContext } from "react";
import { IAddDataContext } from "@/@Types/types";

export const DataContext = createContext({} as IAddDataContext);

export default function useInputContext() {
  return useContext(DataContext);
}
