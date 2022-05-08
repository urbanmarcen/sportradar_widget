import { Box, Fade } from "@mui/material";
import React, { FC, useEffect, useState } from "react";

interface MatchScoreProps {
  score_home?: number | undefined;
  score_away?: number | undefined;
}

const MatchScore: FC<MatchScoreProps> = ({
  score_home = 0,
  score_away = 0,
}) => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(false);
    setTimeout(() => {
      setShown(true);
    }, 400);
  }, [score_home, score_away]);

  return (
    <Fade in={shown}>
      <Box
        component={"span"}
        data-testid="MatchScore"
        sx={{ backgroundColor: "#ebebeb", padding: "5px 10px" }}
      >
        {score_home} - {score_away}
      </Box>
    </Fade>
  );
};

export default MatchScore;
