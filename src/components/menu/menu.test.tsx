import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menu } from "./menu";
import { MenuOptions } from "../../types/menu.options";

describe("Given ", () => {
  describe("When", () => {
    const options: MenuOptions = [{ url: "", label: "Test" }];

    render(
      <Router>
        <Menu options={options}></Menu>
      </Router>
    );
    const element = screen.getByRole("navigation");

    test("Then it should ...", () => {
      expect(element).toBeInTheDocument();
    });
  });
});
