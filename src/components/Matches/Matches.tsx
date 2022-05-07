import Livescore from "common/Livescore";
import Match from "components/Match/Match";
import React, { FC } from "react";
import { useGetLivescoreQuery } from "services/sportradar";

interface MatchesProps {}

const Matches: FC<MatchesProps> = () => {

  const { data, error, isLoading } = useGetLivescoreQuery("",{pollingInterval: 10000});

  console.log('data', data);

  let matches = [];

  /*if(data.matches !== undefined) {
    matches = data.matches;
  }*/

  //const { matches } = new Livescore(data);
    
  return <div data-testid="Matches">
    
    {data !== undefined && data.matches !== undefined && data.matches.map((match:any)=><Match matchData={match}/>)}
  </div>;
};

export default Matches;
