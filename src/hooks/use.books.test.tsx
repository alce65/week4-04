import { useBooks } from "./use.books";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ApiRepository } from "../services/api.repository";
import { Book } from "../models/book";

const mockBook: Book = {
  id: 1,
} as Book;

ApiRepository.prototype.getAll = jest.fn();
ApiRepository.prototype.create = jest.fn();
ApiRepository.prototype.update = jest.fn();
ApiRepository.prototype.delete = jest.fn();

(ApiRepository.prototype.getAll as jest.Mock).mockResolvedValue([mockBook]);

function TestComponent() {
  const { handleAdd, handleUpdate, handleDelete } = useBooks();

  return (
    <>
      <h1>Test</h1>
      <button onClick={() => handleAdd(mockBook)}>Add</button>
      <button onClick={() => handleUpdate(mockBook)}>Update</button>
      <button onClick={() => handleDelete(mockBook)}>Delete</button>
    </>
  );
}

describe("Given the hook useBooks", () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(async () => {
      render(<TestComponent></TestComponent>);
    });
    elements = screen.getAllByRole("button");
  });
  describe("When all is OK", () => {
    test("Then it should ...", async () => {
      await userEvent.click(elements[0]);
      expect(ApiRepository.prototype.create).toHaveBeenCalled();
    });

    test("should ", async () => {
      (ApiRepository.prototype.update as jest.Mock).mockResolvedValueOnce(
        mockBook
      );
      await userEvent.click(elements[1]);
      expect(ApiRepository.prototype.update).toHaveBeenCalled();
    });

    test("should ", async () => {
      await userEvent.click(elements[2]);
      expect(ApiRepository.prototype.delete).toHaveBeenCalled();
    });
  });

  describe("When there ara errors", () => {
    test("should ", async () => {
      (ApiRepository.prototype.create as jest.Mock).mockRejectedValueOnce(
        new Error("")
      );
      await userEvent.click(elements[0]);
      expect(ApiRepository.prototype.create).toHaveBeenCalled();
    });

    test("should ", async () => {
      (ApiRepository.prototype.update as jest.Mock).mockRejectedValueOnce(
        new Error("")
      );
      await userEvent.click(elements[1]);
      expect(ApiRepository.prototype.update).toHaveBeenCalled();
    });

    test("should ", async () => {
      (ApiRepository.prototype.delete as jest.Mock).mockRejectedValueOnce(
        new Error("")
      );
      await userEvent.click(elements[2]);
      expect(ApiRepository.prototype.delete).toHaveBeenCalled();
    });
  });
});
