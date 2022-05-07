import React, { FC } from 'react';

interface IMatch {
  match_id:number
  tournament_id:number
  round:number
  home_team_id:number
  away_team_id:number
}

interface MatchProps {
  matchData?: IMatch
}

const Match: FC<MatchProps> = ({matchData= {}}) => (
  <div data-testid="Match">
    <table>
      <tbody>
        <tr>
          <td><img src={`https://vgcommonstaging.aitcloud.de/livescore/images/logo_${matchData.home_team_id}.png`}/>{matchData.home_team_id}</td>
          <td>{matchData.match_id}</td>
          <td><img src={`https://vgcommonstaging.aitcloud.de/livescore/images/logo_${matchData.away_team_id}.png`}/>{matchData.away_team_id}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Match;
