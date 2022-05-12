import IEvent from "types/IEvent";
import ILivescore from "types/ILivescore";
import IMatch from "types/IMatch";
import ITeam from "types/ITeam";

// main match object
class Match implements IMatch {
  match_id: number;
  tournament_id: number;
  round: number;
  home_team_id: number;
  away_team_id: number;
  home_score: number;
  away_score: number;
  home_team_name: string;
  away_team_name: string;

  constructor({
    match_id = 0,
    tournament_id = 0,
    round = 0,
    home_team_id = 0,
    away_team_id = 0,
    home_score = 0,
    away_score = 0,
    home_team_name = "",
    away_team_name = "",
  }: IMatch) {
    this.match_id = match_id;
    this.tournament_id = tournament_id;
    this.round = round;
    this.home_team_id = home_team_id;
    this.away_team_id = away_team_id;
    this.home_score = home_score;
    this.away_score = away_score;
    this.home_team_name = home_team_name;
    this.away_team_name = away_team_name;
  }
}

//   main Livescore data processing
class Livescore {
  private matches: IMatch[] = [];
  private events: IEvent[] = [];
  private teams: ITeam[] = [];
  private data: ILivescore = { matches: [], events: [], teams: [] };

  constructor() {}

  public Build(data: ILivescore) {
    this.events = data.events;
    this.matches = data.matches;
    this.teams = data.teams;
  }

  public prepareData() {
    let tmpMatches: IMatch[] = [];
    // loop matches and fill missing data
    this.matches.forEach((match, idx) => {
      // add home name
      let tmpMatch = new Match(match);
      tmpMatch.home_team_name = this.teams.filter(
        (ef) => ef.team_id === match.home_team_id
      )[0].team_name;
      // add away name
      tmpMatch.away_team_name = this.teams.filter(
        (ef) => ef.team_id === match.away_team_id
      )[0].team_name;
      // add away score
      tmpMatch.away_score = this.events
        .filter(
          (ev) =>
            ev.match_id === match.match_id &&
            ev.event_type === "goal" &&
            ev.score_team === "away"
        )
        .reduce((val, evt) => val + (evt.score_amount ??= 0), 0);
      // add  home score
      tmpMatch.home_score = this.events
        .filter(
          (ev) =>
            ev.match_id === match.match_id &&
            ev.event_type === "goal" &&
            ev.score_team === "home"
        )
        .reduce((val, evt) => val + (evt.score_amount ??= 0), 0);
      tmpMatches.push(tmpMatch);
    });

    this.matches = tmpMatches;

    return this.matches;
  }
}

export default Livescore;
