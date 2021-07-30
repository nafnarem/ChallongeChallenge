import "./GetTournaments.css";
const GetTournament = (props) => {
  console.log(props.tournaments.data);
  return (
    <div className="get-container">
      {props.isLoading && <div className="loading">Loading...</div>}
      {!props.isLoading && (
        <div className="tournament-list">
          {props.tournaments.data.data.map((tourn) => {
            return (
              <div className="tournament">
                <img
                  src="https://secure.gravatar.com/avatar/7542961e5d985ef8b34ce5ed2e6266a6?r=r&amp;s=40&amp;d=https://s3.amazonaws.com/challonge_app/misc/challonge_fireball_gray.png"
                  height="60px"
                  width="60px"
                ></img>
                <p key={tourn.id} className="title">
                  {tourn.attributes.name}
                  <p className="tournament-type">
                    {`Tournament Type: ${tourn.attributes.tournamentType}`}
                  </p>
                  <p className="tournament-code">
                    {`Tournament Code: ${tourn.attributes.url}`}
                  </p>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default GetTournament;
