import { BookAction } from "./actions.creator";
import { BooksState, bookReducer } from "./reducer";

describe("Given the reducer bookReducer", () => {
  describe("When", () => {
    const booksState: BooksState = {
      books: [],
    };

    const action: BookAction = {
      type: "test",
      payload: 0,
    } as unknown as BookAction;

    test("Then it should ...", () => {
      const newState = bookReducer(booksState, action);
      expect(newState).toEqual(booksState);
    });
  });
});
