import { useContext } from "react";
import { AddNote } from "../add.note/add.note";
import { CardNote } from "../card.note/card.note";
import "./notes.scss";

import { AppContext } from "../../context/app.context";
export default function Notes() {
  const {
    sample,
    notesContext: { notes },
  } = useContext(AppContext);

  return (
    <section>
      <h2>Notes List</h2>
      <p>{sample}</p>
      <AddNote></AddNote>
      <br />
      <ul className="notes">
        {notes.map((item) => (
          <CardNote item={item} key={item.id}></CardNote>
        ))}
      </ul>
    </section>
  );
}
