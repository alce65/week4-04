import { useContext } from "react";
import { AddBook } from "../add.book/add.book";
import { CardBook } from "../card.book/card.book";
import "./books.scss";

import { AppContext } from "../../context/app.context";
export default function Books() {
  const {
    sample,
    booksContext: { books },
  } = useContext(AppContext);

  return (
    <section>
      <h2>Books List</h2>
      <p>{sample}</p>
      <AddBook></AddBook>
      <br />
      <ul className="books">
        {books.map((item) => (
          <CardBook item={item} key={item.id}></CardBook>
        ))}
      </ul>
    </section>
  );
}
