import { useContext } from "react";
import { AppContext } from "../../context/app.context";

export default function BooksDetails() {
  const {
    booksContext: { selectedBook },
  } = useContext(AppContext);

  console.log(selectedBook);

  return (
    <header>
      <h2>Book {selectedBook?.id} Details</h2>
    </header>
  );
}
