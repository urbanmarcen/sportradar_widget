import Matches from "components/Matches/Matches";
import React, { FC, useEffect } from "react";

interface LivescoreProps {}

const Livescore: FC<LivescoreProps> = () => {
  useEffect(() => {}, []);

  return <div data-testid="Livescore">
    <div>
        <h1>Matches</h1>
    </div>
    <div>
      <Matches/>
    </div>
    
  </div>;
};

export default Livescore;
