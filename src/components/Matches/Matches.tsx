import Match from "components/Match/Match";
import React, { FC } from "react";
import { useGetLivescoreQuery } from "services/sportradar";
import Livescore from "common/classes";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";

import { STATS_POLLING_INERVAL } from "config";
interface MatchesProps {}

const Matches: FC<MatchesProps> = () => {
  const { data, isError, isLoading } = useGetLivescoreQuery("", {
    pollingInterval: STATS_POLLING_INERVAL,
  });

  const SRMatches = new Livescore();
  SRMatches.Build(
    data !== undefined ? data : { matches: [], events: [], teams: [] }
  );

  const allMatches = SRMatches.prepareData();

  return (
    <TableContainer component={Paper} data-testid="Matches">
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="right">Home</TableCell>
            <TableCell align="center">Score</TableCell>
            <TableCell align="left">Away</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allMatches !== undefined &&
            allMatches !== undefined &&
            allMatches.map((match: any) => (
              <Match key={`match-${match.match_id}`} matchData={match} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Matches;
