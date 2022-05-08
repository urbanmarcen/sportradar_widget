interface IMatch {
  match_id: number;
  tournament_id: number;
  round: number;
  home_team_id: number;
  away_team_id: number;
  home_score?: number;
  away_score?: number;
  home_team_name?: string;
  away_team_name?: string;
}

export default IMatch;
