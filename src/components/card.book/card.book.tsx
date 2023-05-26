import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Book } from "../../models/book";
import "./card.book.scss";

type PropsType = {
  item: Book;
};

export function CardBook({ item }: PropsType) {
  const {
    booksContext: { handleUpdate, handleDelete },
  } = useContext(AppContext);

  const handleChange = () => {
    item.isRead = !item.isRead;
    handleUpdate(item);
  };

  const handleClick = () => {
    console.log("Deleting");
    handleDelete(item);
  };

  return (
    <li className="card">
      <span>
        <input type="checkbox" checked={item.isRead} onChange={handleChange} />
        Read
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
