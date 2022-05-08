import React from "react";
import { render, screen } from "@testing-library/react";
import App, { AppWrapper } from "./App";

test("renders learn react link", () => {
  render(
    <AppWrapper>
      <App />
    </AppWrapper>
  );
  const linkElement = screen.getByText(/Matches/i);
  expect(linkElement).toBeInTheDocument();
});
