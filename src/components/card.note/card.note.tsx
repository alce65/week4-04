import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Note } from "../../models/note";
import "./card.note.scss";

type PropsType = {
  item: Note;
};

export function CardNote({ item }: PropsType) {
  const {
    notesContext: { handleUpdate, handleDelete },
  } = useContext(AppContext);

  const handleChange = () => {
    item.isImportant = !item.isImportant;
    handleUpdate(item);
  };

  const handleClick = () => {
    console.log("Deleting");
    handleDelete(item);
  };

  return (
    <li className="card">
      <span>
        <input
          type="checkbox"
          checked={item.isImportant}
          onChange={handleChange}
        />
        Important
      </span>
      <span>{item.id}</span>
      <span>{item.title}</span>
      <span>{item.author}</span>
      <i className="button" role="button" onClick={handleClick}>
        🗑️
      </i>
    </li>
  );
}
