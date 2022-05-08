interface IEvent {
    event_id: number,
    event_type: string,
    event_time: number,
    match_id: number,
    score_amount: number,
    score_team: 'home' |'away'
  }
  
  export default IEvent;
  