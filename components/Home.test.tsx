import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Landing from "@/app/page";

function sum(a: number, b: number): number {
  return a + b;
}

// let data: number[] = [];

// beforeEach(() => {
//   console.log("Before each test");
//   data = [2, 3, 4];
// });

// afterEach(() => {
//   console.log("After each test");
// });

test("adds 2+3 should be equal 5", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(3, 3)).not.toBe(5);
});

test('There is no "I" in team', () => {
  expect("team").not.toMatch(/I/);
});

test('There is a "stop" in team', () => {
  expect("christopher").toMatch(/stop/);
});

async function getResponse() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ value: "Hello World" });
    }, 1000);
  });
}

test("the data is Hello World", async () => {
  const response: any = await getResponse();
  expect(response.value).toEqual("Hello World");
});

describe("Combine promise response value", () => {
  test("async getResponse should return Hello World", async () => {
    const response: any = await getResponse();
    expect(response.value).toEqual("Hello World");
  });

  test("async getResponse should not return abcd", async () => {
    const response: any = await getResponse();
    expect(response.value).not.toEqual("abcd");
  });
});

describe("Test Home component", () => {
  beforeEach(() => {
    render(<Landing />);
  });
  //   it("renders a heading", () => {
  //     render(<Home />);
  //     const text = screen.getByText(/Home/i);
  //     expect(text).toBeInTheDocument();
  //   });

  it("renders a heading", () => {
    const text = screen.getByText(/Home/i);
    expect(text).toBeInTheDocument();
  });

  //   it("renders a heading inside it", () => {
  //     // const text = screen.getByText(/Home/i);
  //     const text = screen.getByRole("heading", { level: 1 });
  //     expect(text).toBeInTheDocument();
  //   });

  it("test the description", () => {
    const text = screen.getByTestId("desc");
    expect(text.textContent).toMatch(/description/);
    expect(text).toHaveTextContent("this is my description");
  });
});
