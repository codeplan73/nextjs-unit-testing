import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import TodoAndPhotoList from "@/components/TodoAndPhotoList";
import { url } from "inspector/promises";

const originalFetch = global.fetch;

describe("Testing TodoPhotolist component", () => {
  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders todo list", async () => {
    const mockTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
    ];

    // ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockTodos),
      }),
    );
    // ts-ignore

    render(<TodoAndPhotoList />);

    await waitFor(() => {
      expect(screen.getByText("Todo 1 - Pending")).toBeInTheDocument();
      expect(screen.getByText("Todo 2 - Completed")).toBeInTheDocument();
    });
  });
});
