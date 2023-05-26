import "./App.css";
import { Header } from "../header/header";
import { Menu } from "../menu/menu";
import { MenuOptions } from "../../types/menu.options";
import { AppRoutes } from "../app.routes/app.routes";

export function App() {
  const label = "Desde fuera";
  const options: MenuOptions = [
    { url: "", label: "Home" },
    { url: "todo", label: "Todo List" },
    { url: "notes", label: "Notes List" },
    { url: "books", label: "Books" },
  ];

  return (
    <>
      <Header label={label} user="Pepe">
        <Menu options={options}></Menu>
      </Header>

      <AppRoutes></AppRoutes>
    </>
  );
}
