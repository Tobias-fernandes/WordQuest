"use client";

import { Search as SearchIcon } from "lucide-react";

import { useContext } from "react";
import { InputContext } from "@/hooks/useInputContext";

// Component resposible for filetering the words
export const Search = () => {
  const { input, setInput } = useContext(InputContext);

  return (
    <>
      <div className="flex flex-col bg-white py-4 px-2 rounded-xl">
        <form
          className="flex gap-1.5 justify-center px-10 sm:px-[250px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Pesquise sua palavra"
            className="bg-gray-300 w-40 md:w-[400px] py-1.5 px-3 text-xs md:text-lg rounded-md sm:w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            type="submit"
            className="bg-black text-xs text-white p-2 rounded-2xl"
          >
            <SearchIcon />
          </button>
        </form>
      </div>
    </>
  );
};
