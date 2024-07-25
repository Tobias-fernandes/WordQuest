import { Dispatch, SetStateAction } from 'react'

export interface IWords {
  id: string
  word: string;
}

export interface IInputContext {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export interface IAddDataContext {
  add: IWords[];
  setAdd: Dispatch<SetStateAction<IWords[]>>;
}

export interface IDataWords {
  [key: string]: IWords[];
}

export interface IContainer {
  header?: string;
  words: IWords[];
}