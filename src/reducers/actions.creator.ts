import { Book } from "../models/book";
import { actionTypes } from "./actions.types";

export type BookAction = {
  type: keyof typeof actionTypes;
  payload: Book[] | Book | number;
};

export function loadBookAction(payload: Book[]): BookAction {
  return {
    type: actionTypes.load as keyof typeof actionTypes,
    payload,
  };
}

export function deleteBookAction(payload: number) {
  return {
    type: actionTypes.delete as keyof typeof actionTypes,
    payload,
  };
}

export function createBookAction(payload: Book) {
  return {
    type: actionTypes.create as keyof typeof actionTypes,
    payload,
  };
}

export function updateBookAction(payload: Book) {
  return {
    type: actionTypes.update as keyof typeof actionTypes,
    payload,
  };
}
