import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByText("Login")

  //better way to find is using role & we can even use name of button if there are multiple buttons
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

test("should render header component with cart items 0 initially", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("cart (0 items)");

  expect(cartItems).toBeInTheDocument();
});

test("should render header component with just cart or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // below (/cart/) is rejix i.e. just aadha bhi match hua to chlega, no need to match all
  const initialCart = screen.getByText(/cart/);

  expect(initialCart).toBeInTheDocument();
});

test("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  
  const loginButton = screen.getByRole("button", { name: "Login" });

  // fireEvent just simulate an eveent & by using dot operator after it, we can use any event
  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
