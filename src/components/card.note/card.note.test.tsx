import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { CardNote } from "./card.note";
import { Note } from "../../models/note";

import { AppContext, ContextStructure } from "../../context/app.context";

describe("Given CardNote", () => {
  describe("When it is instantiate", () => {
    const value: ContextStructure = {
      notesContext: {
        handleDelete: jest.fn(),
        handleUpdate: jest.fn(),
      },
    } as unknown as ContextStructure;
    beforeEach(() => {
      render(
        <AppContext.Provider value={value}>
          <CardNote item={{} as Note}></CardNote>
        </AppContext.Provider>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });

    test("Then the user should change the note importance", async () => {
      const elementCheck = screen.getByRole("checkbox");
      await userEvent.click(elementCheck);
      expect(value.notesContext.handleUpdate).toHaveBeenCalled();
    });

    test("Then the user should delete the importance", async () => {
      const elementButton = screen.getByRole("button");
      await userEvent.click(elementButton);
      expect(value.notesContext.handleDelete).toHaveBeenCalled();
    });
  });
});
