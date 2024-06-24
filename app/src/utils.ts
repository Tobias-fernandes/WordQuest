import { IWords } from "./@Types/types";

export const reorder = (
    list: IWords[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    1;
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  
  export const remove = (list: IWords[], index: number) => {
    const result = [...list];
    result.splice(index, 1);
    return result;
  };
  
  export const appendAt = (
    list: IWords[],
    index: number,
    pokemon: IWords
  ) => {
    const result = [...list];
    result.splice(index, 0, pokemon);
    return result;
  };
  