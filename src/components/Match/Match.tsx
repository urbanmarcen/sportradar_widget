import {  TableCell, TableRow } from "@mui/material";
import MatchScore from "components/MatchScore/MatchScore";
import React, { FC } from "react";
import IMatch from "types/IMatch";

interface MatchProps {
  matchData?: IMatch;
}

const Match: FC<MatchProps> = ({ matchData = {} }) => (
  <TableRow data-testid={`Match-${matchData.match_id}`}>
    <TableCell align="right">
      {matchData.home_team_name}{" "}
      <img
        alt="home logo"
        src={`https://vgcommonstaging.aitcloud.de/livescore/images/logo_${matchData.home_team_id}.png`}
      />
    </TableCell>
    <TableCell align="center" title={`MatchID - ${matchData.match_id} `}>
      <MatchScore score_home={matchData.home_score} score_away={matchData.away_score} />      
    </TableCell>
    <TableCell align="left">
      <img
        alt="away logo"
        src={`https://vgcommonstaging.aitcloud.de/livescore/images/logo_${matchData.away_team_id}.png`}
      />
      {matchData.away_team_name}
    </TableCell>
  </TableRow>
);

export default Match;
