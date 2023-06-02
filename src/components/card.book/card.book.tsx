import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { Book } from "../../models/book";
import "./card.book.scss";
import { useNavigate } from "react-router-dom";

type PropsType = {
  item: Book;
};

export function CardBook({ item }: PropsType) {
  const navigate = useNavigate();

  const {
    booksContext: { handleUpdate, handleDelete, handleSelectBook },
  } = useContext(AppContext);

  const handleChange = () => {
    item.isRead = !item.isRead;
    handleUpdate(item);
  };

  const handleClick = () => {
    console.log("Deleting");
    handleDelete(item);
  };

  const handleDetailsClick = () => {
    handleSelectBook(item);
    navigate("/book-details");
  };

  return (
    <li className="card">
      <span>
        <input type="checkbox" checked={item.isRead} onChange={handleChange} />
        Read
      </span>
      <span onClick={handleDetailsClick}>
        <span>{item.id}</span>
        <span>{item.title}</span>
        <span>{item.author}</span>
      </span>

      <i className="button" role="button" onClick={handleClick}>
        🗑️
      </i>
    </li>
  );
}
