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

export function deleteBookAction(payload: number): BookAction {
  return {
    type: actionTypes.delete,
    payload,
  };
}

export function createBookAction(payload: Book): BookAction {
  return {
    type: actionTypes.create,
    payload,
  };
}

export function updateBookAction(payload: Book): BookAction {
  return {
    type: actionTypes.update,
    payload,
  };
}

export function selectBookAction(payload: Book): BookAction {
  return {
    type: actionTypes.selectBook,
    payload,
  };
}

export function unSelectBookAction() {
  return {
    type: actionTypes.selectBook,
  };
}
