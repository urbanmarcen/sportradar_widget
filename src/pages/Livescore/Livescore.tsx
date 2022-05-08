import { Grid, Typography } from "@mui/material";
import Matches from "components/Matches/Matches";
import React, { FC, useEffect } from "react";

interface LivescoreProps {}

const Livescore: FC<LivescoreProps> = () => {
  useEffect(() => {}, []);

  return (
    <Grid data-testid="Livescore" container>
      <Grid item xs={12} container justifyContent="center">
        <Typography variant="h4">Matches</Typography>
      </Grid>
      <Grid item xs={12}>
        <Matches />
      </Grid>
    </Grid>
  );
};

export default Livescore;
