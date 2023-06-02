import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));
const ToDo = lazy(() => import("../todo/todo"));
const Notes = lazy(() => import("../notes/notes"));
const NotesDetail = lazy(() => import("../notes.detail/notes.detail"));
const Books = lazy(() => import("../books/books"));
const BooksDetail = lazy(() => import("../books.detail/books.details"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="todo" element={<ToDo></ToDo>}></Route>
        <Route path="notes" element={<Notes></Notes>}></Route>
        <Route
          path="note-details/:id"
          element={<NotesDetail></NotesDetail>}
        ></Route>
        <Route path="books" element={<Books></Books>}></Route>
        <Route
          path="book-details"
          element={<BooksDetail></BooksDetail>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
