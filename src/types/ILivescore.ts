import IEvent from "./IEvent";
import IMatch from "./IMatch";
import ITeam from "./ITeam";

interface ILivescore {
  matches: IMatch[];
  events: IEvent[];
  teams: ITeam[];
}

export default ILivescore;
