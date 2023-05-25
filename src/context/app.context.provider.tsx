import { useNotes } from "../hooks/use.notes";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    sample: "Soy tu padre, el contexto",
    notesContext: useNotes(),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
