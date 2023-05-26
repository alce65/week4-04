import { createContext } from "react";
import { useNotes } from "../hooks/use.notes";
import { useBooks } from "../hooks/use.books";

export type ContextStructure = {
  sample: string;
  notesContext: ReturnType<typeof useNotes>;
  booksContext: ReturnType<typeof useBooks>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
