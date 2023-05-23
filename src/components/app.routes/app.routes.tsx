import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../home/home"));
const ToDo = lazy(() => import("../todo/todo"));

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="todo" element={<ToDo></ToDo>}></Route>
      </Routes>
    </Suspense>
  );
}
