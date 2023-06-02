// Reducer -> función pura
// acepta como valor un ESTADO y una ACCIÓN
// retorna un nuevo ESTADO (inmutable)

import { Book } from "../models/book";
import { BookAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type BooksState = {
  books: Book[];
  selectedBook: Book | null;
};

export const bookReducer = (state: BooksState, action: BookAction) => {
  let payload: Book[] | Book | number;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Book[];
      return { ...state, books: payload };

    case actionTypes.create:
      payload = action.payload as Book;
      return { ...state, books: [...state.books, payload] };

    case actionTypes.update:
      payload = action.payload as Book;
      return {
        ...state,
        books: state.books.map((item) =>
          item.id === (payload as Book).id ? (payload as Book) : item
        ),
      };

    case actionTypes.delete:
      payload = action.payload as number;
      return {
        ...state,
        books: state.books.filter((item) => item.id !== payload),
      };

    case actionTypes.selectBook:
      payload = action.payload as Book;
      return {
        ...state,
        selectedBook: payload,
      };

    case actionTypes.unSelectBook:
      return {
        ...state,
        selectedBook: null,
      };

    default:
      return { ...state };
  }
};
