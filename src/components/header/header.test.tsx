import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Header } from "./header";

describe("Given Header component", () => {
  describe("When it is instantiate", () => {
    // Arrange
    const label = "Test label";
    const user = "Test user";

    beforeEach(() => {
      // Act
      render(
        <Header label={label} user={user}>
          <p>Menu</p>
        </Header>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("heading");
      // Assert
      expect(element).toBeInTheDocument();
    });
    test("it should display props values", () => {
      // Act
      const elementLabel = screen.getByText(label);
      const elementUser = screen.getByText(user);
      // Assert
      expect(elementLabel).toBeInTheDocument();
      expect(elementUser).toBeInTheDocument();
    });
  });
});
