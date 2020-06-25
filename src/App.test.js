import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders search Button", () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});
