import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders string calculator heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/string calculator/i);
  expect(headingElement).toBeInTheDocument();
});
