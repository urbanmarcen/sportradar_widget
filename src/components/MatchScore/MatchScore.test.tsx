import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MatchScore from "./MatchScore";
import { AppWrapper } from "App";

describe("<MatchScore />", () => {
  test("it should mount", () => {
    render(
      <AppWrapper>
        <MatchScore />
      </AppWrapper>
    );

    const matchScore = screen.getByTestId("MatchScore");

    expect(matchScore).toBeInTheDocument();
  });
});
