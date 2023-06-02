import { SyntheticEvent, useEffect, useState, useContext } from "react";
import { Note } from "../../models/note";
import { AppContext } from "../../context/app.context";

type FormState = Pick<Note, "title" | "author">;

export function AddNote() {
  const {
    notesContext: { notes, handleAdd },
  } = useContext(AppContext);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  const [formState, setFormState] = useState<FormState>({
    title: "",
    author: "",
  });

  const handleChange = (event: SyntheticEvent) => {
    const element = event.target as HTMLFormElement;
    console.dir(element);
    setFormState({
      ...formState,
      [element.name]:
        element.type === "checkbox" ? element.checked : element.value,
    });
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const note: Omit<Note, "id"> = {
      title: formState.title,
      author: formState.author,
      isImportant: false,
    };

    console.log(note);
    handleAdd(note);
  };

  return (
    <form aria-label="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formState?.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="author">Responsable</label>
        <input
          type="text"
          name="author"
          id="author"
          value={formState?.author}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Añadir</button>
    </form>
  );
}
