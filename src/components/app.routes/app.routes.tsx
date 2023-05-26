import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));
const ToDo = lazy(() => import("../todo/todo"));
const Notes = lazy(() => import("../notes/notes"));
const Books = lazy(() => import("../books/books"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="todo" element={<ToDo></ToDo>}></Route>
        <Route path="notes" element={<Notes></Notes>}></Route>
        <Route path="books" element={<Books></Books>}></Route>
      </Routes>
    </Suspense>
  );
}
