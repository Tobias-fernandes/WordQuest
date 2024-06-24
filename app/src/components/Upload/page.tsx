"use client";

import useInputContext from "@/hooks/useInputContext";
import useChangeContext from "@/hooks/useChangeDataContext";
import { FormEvent, useState } from "react";
import { IContainer, IWords } from "../../@Types/types";

import {
  GripVertical as GripVerticalIcon,
  Upload as UploadIcon,
} from "lucide-react";
import { Draggable } from "@hello-pangea/dnd";
import { Droppable } from "@hello-pangea/dnd";

// Component responsible for adding new words to the list and reordering existing words
export const Upload = ({ words }: IContainer) => {
  const [inputValue, setInputValue] = useState(""); // State to get the input value

  const { add, setAdd } = useChangeContext();

  let counter = 5;
  // console.log(words);
  // console.log(setAdd);
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setInputValue("");

    if (!inputValue) return;
    // if (add.find((item) => item.word === inputValue)) return;

    const newWord: IWords = { id: String(counter), word: inputValue };
    // setAdd([...words, newWord]);
    setAdd((prev) => [...prev, newWord]);
    counter++;
  }

  // const { input } = useInputContext();

  // //TODO: this filter function should be implemented within the context, not in the component
  // const filtedInput = array.filter((item) => item.word.includes(input));

  return (
    <>
      <div className="flex flex-col bg-white py-4 px-6 rounded-xl w-72 sm:w-[470px]">
        <form
          className="flex gap-1.5 justify-center px-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Cadastre sua palavra"
            className="bg-gray-300 w-40 py-1.5 px-3 text-xs md:text-lg rounded-md sm:w-full"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-black text-xs text-white p-2 rounded-2xl"
          >
            <UploadIcon />
          </button>
        </form>
        {/* <ul className="text-black mt-2 px-6 text-xs md:text-lg">
          {input.length > 0
            ? filtedInput.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="relative flex items-center border border-solid rounded-2xl m-3 py-2 px-2 justify-center"
                  >
                    <span className="absolute left-2">
                      <GripVertical size={18} />
                    </span>
                    {item.word}
                  </li>
                );
              })
            : array.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="relative flex items-center border border-solid rounded-2xl m-3 py-2 px-2 justify-center"
                  >
                    <span className="absolute left-2">
                      <GripVertical size={18} />
                    </span>
                    {item.word}
                  </li>
                );
              })}
        </ul> */}

        <Droppable droppableId="upload" type="word">
          {(provided) => (
            <div className="mt-5">
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="text-black mt-2 px-6 text-xs md:text-lg"
              >
                {words.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={String(item.id)}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="relative flex items-center shadow-borderShadow rounded-md m-3 py-2 px-2 justify-center"
                      >
                        <span className="absolute left-2">
                          <GripVerticalIcon size={18} />
                        </span>
                        {item.word}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </div>
      {/* Manusear Item */}
    </>
  );
};
