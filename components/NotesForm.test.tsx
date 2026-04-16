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

  it("renders input textbox", () => {
    const input = screen.getByTestId("note-input");
    expect(input).toBeInTheDocument();
  });

  it("renders a button", () => {
    const button = screen.getByRole("button", { name: /save note/i });
    // const button = screen.getByTestId("save-note-button");
    expect(button).toBeInTheDocument();
  });

  it("check Add note button disabled", () => {
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("Fill the input note textbox to make button enabled", () => {
    const textInput = screen.getByPlaceholderText(/Enter a note/i);
    fireEvent.change(textInput, { target: { value: "Test Note" } });
    const button = screen.getByRole("button", { name: /save note/i });
    expect(button).toBeEnabled();
  });

  it("Test notes list", () => {
    const textInput = screen.getByPlaceholderText(/Enter a note/i);
    const notesList = screen.getByTestId("note-list");
    const button = screen.getByRole("button");
    expect(notesList.querySelectorAll("li")).toHaveLength(0);

    fireEvent.click(textInput, { target: { value: "Test Note 1" } });
    fireEvent.click(button);
    fireEvent.click(textInput, { target: { value: "Test Note 2" } });
    fireEvent.click(button);
    expect(notesList.querySelectorAll("li")).toHaveLength(2);
  });
});
