import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact Us componnet", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("should load Button inside Contact componnet", () => {
  render(<Contact />);

  // const button = screen.getByRole("button");
  const button = screen.getByText("Submit");

  expect(button).toBeInTheDocument();
});

// instead of test we can use it also .. test a.k.a it -> just another name
it("should load input name inside Contact componnet", () => {
  render(<Contact />);

  // const button = screen.getByRole("button");
  const inputName = screen.getByPlaceholderText("Name");

  expect(inputName).toBeInTheDocument();
});

test("should load 2 input boxes on the Contact page", () => {
  render(<Contact />);

  // Querying
  const inputBoxes = screen.getAllByRole("textbox");

  console.log(inputBoxes);
  // the screen.getAllByRole("textbox") actually returns a JSX element i.e. a react element --> an object or a virtual dom or a rreact fiber node

  // expect(inputBoxes).toBeInTheDocument();

  // length check kr rhe bcz 2 input boxes aayga bcz contact page me 2 inputbox hai & apna JSX jo return kiya hai upar wo ek array hai with 2 jsx object inside it & uska length 2 hai ki nhi i.e 2 inout box hai ki nhi
  expect(inputBoxes.length).toBe(2);
});

// when there are multiple test cases we  can group then inside describe . it works exactly like same, it is just a convention / bss acccha lagta grouping kr do toh
/*
describe("Contact us page test cases", () => {
  test("should load contact Us componnet", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load Button inside Contact componnet", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load input name inside Contact componnet", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input boxes on the Contact page", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes);
    // the screen.getAllByRole("textbox") actually returns a JSX element i.e. a react element --> an object or a virtual dom or a rreact fiber node

    // expect(inputBoxes).toBeInTheDocument();

    // length check kr rhe bcz 2 input boxes aayga bcz contact page me 2 inputbox hai & apna JSX jo return kiya hai upar wo ek array hai with 2 jsx object inside it & uska length 2 hai ki nhi i.e 2 inout box hai ki nhi
    expect(inputBoxes.length).toBe(2);
  });
});

*/
