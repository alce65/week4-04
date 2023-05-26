import { SyntheticEvent, useEffect, useState, useContext } from "react";
import { Book } from "../../models/book";
import { AppContext } from "../../context/app.context";

type FormState = Pick<Book, "title" | "author">;

export function AddBook() {
  const {
    booksContext: { books, handleAdd },
  } = useContext(AppContext);

  useEffect(() => {
    console.log(books);
  }, [books]);

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
    const book: Omit<Book, "id"> = {
      title: formState.title,
      author: formState.author,
      isRead: false,
    };

    console.log(book);
    handleAdd(book);
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
