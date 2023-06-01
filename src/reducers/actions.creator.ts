import { Book } from "../models/book";
import { actionTypes } from "./actions.types";

type Keys = keyof typeof actionTypes;

export type BookAction = {
  type: (typeof actionTypes)[Keys];
  payload: Book[] | Book | number;
};

export function loadBookAction(payload: Book[]): BookAction {
  return {
    type: actionTypes.load,
    payload,
  };
}

export function deleteBookAction(payload: number) {
  return {
    type: actionTypes.delete,
    payload,
  };
}

export function createBookAction(payload: Book) {
  return {
    type: actionTypes.create,
    payload,
  };
}

export function updateBookAction(payload: Book) {
  return {
    type: actionTypes.update,
    payload,
  };
}
