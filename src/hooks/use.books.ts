import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Book } from "../models/book";
import { ApiRepository } from "../services/api.repository";
import { consoleError } from "../services/errors";
import { BooksState, bookReducer } from "../reducers/reducer";
import * as ac from "../reducers/actions.creator";

export function useBooks() {
  const initialState: BooksState = {
    books: [],
  };

  // const [books, setBooks] = useState<Book[]>([]);

  const [booksState, dispatch] = useReducer(bookReducer, initialState);

  // FLux (patron) -> Redux (patron + Librería)
  // FLux (patron) ---------------------------------> Hooks: useReducer

  const bookUrl = "http://localhost:3000/books/";

  const repo: ApiRepository<Book> = useMemo(
    () => new ApiRepository<Book>(bookUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedBooks = await repo.getAll();
    //setBooks(loadedBooks);
    dispatch(ac.loadBookAction(loadedBooks));
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  const handleAdd = async (book: Omit<Book, "id">) => {
    try {
      const newBook = await repo.create(book);
      // setBooks([...books, newBook]);
      dispatch(ac.createBookAction(newBook));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleUpdate = async (book: Book) => {
    try {
      const updatedBook = await repo.update(book.id, book);
      // setBooks(books.map((item) => (item.id === book.id ? updatedBook : item)));
      dispatch(ac.updateBookAction(updatedBook));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleDelete = async (book: Book) => {
    try {
      await repo.delete(book.id);
      // setBooks(books.filter((item) => item.id !== book.id));
      dispatch(ac.deleteBookAction(book.id));
    } catch (error) {
      consoleError(error);
    }
  };

  return {
    books: booksState.books,
    handleAdd,
    handleUpdate,
    handleDelete,
  };
}
