import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Matches from "./Matches";
import { AppWrapper } from "App";
import Livescore from "common/classes";

let MockResponse = {
  phase: "match",
  teams: [
    { team_id: 8982001, team_name: "VL Lisbon", team_name_short: "LIS" },
    { team_id: 8982002, team_name: "VL London", team_name_short: "LON" },
    { team_id: 8982003, team_name: "VL Athens", team_name_short: "ATH" },
    { team_id: 8982004, team_name: "VL Vienna", team_name_short: "VIE" },
    { team_id: 8982005, team_name: "VL Moscow", team_name_short: "MOS" },
    { team_id: 8982006, team_name: "VL Zagreb", team_name_short: "ZAG" },
    { team_id: 8982007, team_name: "VL Amsterdam", team_name_short: "AMS" },
    { team_id: 8982008, team_name: "VL Berlin", team_name_short: "BER" },
    { team_id: 8982009, team_name: "VL Copenhagen", team_name_short: "COP" },
    { team_id: 8982010, team_name: "VL Madrid", team_name_short: "MAD" },
    { team_id: 8982011, team_name: "VL Ankara", team_name_short: "ANK" },
    { team_id: 8982012, team_name: "VL Paris", team_name_short: "PAR" },
    { team_id: 8982013, team_name: "VL Rome", team_name_short: "ROM" },
    { team_id: 8982014, team_name: "VL Kiev", team_name_short: "KIE" },
    { team_id: 8982015, team_name: "VL Prague", team_name_short: "PRA" },
    { team_id: 8982016, team_name: "VL Bern", team_name_short: "BRN" },
  ],
  matches: [
    {
      match_id: 194855897,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982010,
      away_team_id: 8982005,
    },
    {
      match_id: 194855899,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982016,
      away_team_id: 8982007,
    },
    {
      match_id: 194855901,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982002,
      away_team_id: 8982003,
    },
    {
      match_id: 194855903,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982014,
      away_team_id: 8982009,
    },
    {
      match_id: 194855905,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982001,
      away_team_id: 8982004,
    },
    {
      match_id: 194855907,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982012,
      away_team_id: 8982013,
    },
    {
      match_id: 194855909,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982011,
      away_team_id: 8982015,
    },
    {
      match_id: 194855911,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982008,
      away_team_id: 8982006,
    },
  ],
  events: [
    {
      event_id: 1,
      event_type: "match_start",
      event_time: 0,
      match_id: 194855897,
    },
    {
      event_id: 2,
      event_type: "match_start",
      event_time: 0,
      match_id: 194855899,
    },
    {
      event_id: 3,
      event_type: "match_start",
      event_time: 0,
      match_id: 194855901,
    },
    {
      event_id: 4,
      event_type: "match_start",
      event_time: 0,
      match_id: 194855903,
    },
    {
      event_id: 5,
      event_type: "match_start",
      event_time: 0,
      match_id: 194855905,
    },
    {
      event_id: 6,
      event_type: "match_start",
      event_time: 0,
      match_id: 194855907,
    },
    {
      event_id: 7,
      event_type: "match_start",
      event_time: 0,
      match_id: 194855909,
    },
    {
      event_id: 8,
      event_type: "match_start",
      event_time: 0,
      match_id: 194855911,
    },
    {
      event_id: 10,
      event_type: "goal",
      event_time: 17,
      match_id: 194855911,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 11,
      event_type: "goal",
      event_time: 22,
      match_id: 194855897,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 13,
      event_type: "goal",
      event_time: 25,
      match_id: 194855901,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 14,
      event_type: "goal",
      event_time: 5,
      match_id: 194855905,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 18,
      event_type: "goal",
      event_time: 42,
      match_id: 194855905,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 19,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 194855905,
    },
    {
      event_id: 22,
      event_type: "goal",
      event_time: 25,
      match_id: 194855907,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 24,
      event_type: "goal",
      event_time: 10,
      match_id: 194855899,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 25,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 194855901,
    },
    {
      event_id: 26,
      event_type: "goal",
      event_time: 23,
      match_id: 194855911,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 29,
      event_type: "goal",
      event_time: 39,
      match_id: 194855909,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 30,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 194855909,
    },
    {
      event_id: 32,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 194855911,
    },
    {
      event_id: 33,
      event_type: "goal",
      event_time: 30,
      match_id: 194855897,
      score_amount: 1,
      score_team: "away",
    },
    {
      event_id: 34,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 194855897,
    },
    {
      event_id: 35,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 194855907,
    },
    {
      event_id: 36,
      event_type: "goal",
      event_time: 54,
      match_id: 194855905,
      score_amount: 1,
      score_team: "home",
    },
    {
      event_id: 39,
      event_type: "match_halftime",
      event_time: 45,
      match_id: 194855899,
    },
  ],
};

describe("<Matches />", () => {
  test("it should mount", () => {
    render(
      <AppWrapper>
        <Matches />
      </AppWrapper>
    );
    const matches = screen.getByTestId("Matches");
    expect(matches).toBeInTheDocument();
  });

  test("Calculate and Sort data", () => {
    const SRMatches = new Livescore();
    SRMatches.Build(MockResponse);
    const allMatches = SRMatches.prepareData();

    expect(allMatches[0]).toEqual({
      match_id: 194855897,
      tournament_id: 1365751,
      round: 4,
      home_team_id: 8982010,
      away_team_id: 8982005,
      home_score: 1,
      away_score: 1,
      home_team_name: "VL Madrid",
      away_team_name: "VL Moscow",
    });
  });
});
