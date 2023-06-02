import { MemoryRouter as Router } from "react-router-dom";

import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NotesDetails from "./notes.detail";
import { AppContext, ContextStructure } from "../../context/app.context";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}));

describe("Given Notes.Detail", () => {
  describe("When", () => {
    const context: ContextStructure = {
      notesContext: {
        notes: [
          {
            id: 1,
          },
        ],
      },
    } as unknown as ContextStructure;

    test("Then it should ...", () => {
      render(
        <Router>
          <AppContext.Provider value={context}>
            <NotesDetails></NotesDetails>
          </AppContext.Provider>
        </Router>
      );
      //
    });
  });
});
