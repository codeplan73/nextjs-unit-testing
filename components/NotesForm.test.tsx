import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NotesApp from "@/components/NotesApp";

describe("Test NotesApp component", () => {
  beforeEach(() => {
    render(<NotesApp />);
  });

  it("renders a title", () => {
    const title = screen.getByTestId("note-title");
    expect(title).toBeInTheDocument();
  });

  it("renders a description", () => {
    const description = screen.getByTestId("note-description");
    expect(description).toBeInTheDocument();
  });
});
