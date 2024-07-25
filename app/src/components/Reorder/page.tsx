"use client";

// import useInputContext from "@/hooks/useInputContext";
import { IContainer } from "../../@types/types";

import { GripVertical as GripVerticalIcon } from "lucide-react";
import { Draggable, Droppable } from "@hello-pangea/dnd";

// Component is responsible for reordering the words dropped from the Upload component, and can be filtered by the input value from Search component
export const Reorder = ({ words }: IContainer) => {
  // const { input } = useInputContext();
  return (
    <>
      <div className="flex flex-col bg-white py-4 px-6 rounded-xl w-72 sm:w-[470px]">
        <Droppable droppableId="reorder" type="word">
          {(provided) => (
            <div>
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="text-black mt-2 px-6 text-xs md:text-lg"
              >
                {words.map((item: any, index: any) => (
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
                        className="relative flex items-center shadow-md rounded-md m-3 py-2 px-2 justify-center"
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
    </>
  );
};
