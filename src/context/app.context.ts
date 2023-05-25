import { createContext } from "react";
import { useNotes } from "../hooks/use.notes";

export type ContextStructure = {
  sample: string;
  notesContext: ReturnType<typeof useNotes>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
