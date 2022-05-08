import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Livescore from "./Livescore";
import { AppWrapper } from "App";

describe("<Livescore />", () => {
  test("it should mount", () => {
    render(
      <AppWrapper>
        <Livescore />
      </AppWrapper>
    );

    const livescore = screen.getByTestId("Livescore");

    expect(livescore).toBeInTheDocument();
  });
});
