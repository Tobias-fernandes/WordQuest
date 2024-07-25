"use client";

import { initialWords } from "@/data/data";
import { useState } from "react";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { reorder, remove, appendAt } from "@/utils";
import { Upload } from "@/components/Upload/page";
import { Reorder } from "@/components/Reorder/page";

export default function DragNDrop() {
  const [listWords, setListWords] = useState(initialWords);

  // Handle when the user drops an 'Droppable' component
  function handleDragEnd(result: DropResult) {
    const src = result.source;
    const dest = result.destination;

    // Dropped outside the list
    if (!dest) {
      return;
    }

    if (src.droppableId === dest.droppableId) {
      // If same container, just reorder
      const items = reorder(
        [...listWords[src.droppableId]],
        src.index,
        dest.index
      );

      // Set the correct list
      const tempListWords = { ...listWords };
      tempListWords[src.droppableId] = items;

      setListWords({ ...tempListWords });
    } else {
      // Otherwise, handle source and destination

      // Remove from the source list
      const srcItems = remove(listWords[src.droppableId], src.index);

      // Add to the new list
      const destItems = appendAt(
        listWords[dest.droppableId],
        dest.index,
        listWords[src.droppableId][src.index]
      );

      // Set new list values
      const tempListWords = { ...listWords };
      tempListWords[src.droppableId] = srcItems;
      tempListWords[dest.droppableId] = destItems;
      setListWords({ ...tempListWords });
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Upload words={listWords.upload || []} />
        <Reorder words={listWords.reorder || []} />
      </DragDropContext>
    </>
  );
}
