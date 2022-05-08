import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Match from "./Match";

const MockData = {
  match_id: 12346565,
  tournament_id: 123,
  round: 1,
  home_team_id: 12345,
  away_team_id: 45435,
  home_score: 0,
  away_score: 0,
  home_team_name: "Team home",
  away_team_name: "Team away",
};

describe("<Match />", () => {
  test("it should mount", () => {
    render(<Match />);
    const match = screen.getByTestId("Match-0");
    expect(match).toBeInTheDocument();
  });

  test("Sample render with data", () => {
    render(<Match matchData={MockData} />);
    const matchScore = screen.getByText("0 - 0");
    const matchTeamName = screen.getByText("Team home");
    expect(matchScore).toBeInTheDocument();
    expect(matchTeamName).toBeInTheDocument();
  });
});
