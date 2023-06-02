import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app.context";

export default function NotesDetails() {
  const { id } = useParams();
  const {
    notesContext: { notes },
  } = useContext(AppContext);

  console.log(notes);
  console.log({ id });

  return (
    <header>
      <h2>Note {id} Details</h2>
    </header>
  );
}
