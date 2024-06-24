import { Header } from "@/components/Header/page";

import { Search } from "@/components/Search/page";
import DragNDrop from "@/components/DragDrop/page";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-5 md:mt-16 flex flex-col gap-5 items-center">
        <Search />
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <DragNDrop />
        </div>
      </main>

      <footer className="text-center text-xs md:text-base">
        <p>&copy; Tobias Fernandes | Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
