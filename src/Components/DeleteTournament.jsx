import { useEffect, useState } from "react";
import Instance from "./Instance";
import "./DeleteTournament.css";
const DeleteTournament = (props) => {
  const [del, setDel] = useState([]);
  const delTournament = (url) => {
    Instance.delete("/tournaments/" + url, { data: null })
      .then((response) => {
        setDel(response);
      })
      .catch((error) => {
        console.error(error);
      });
    props.updated();
  };
  return (
    <div>
      {props.isLoading && <div className="loading">Loading...</div>}
      {!props.isLoading && (
        <div className="tournament-list">
          {props.tournaments.data.data.map((tournament) => {
            return (
              <div className="tournament-wrap">
                <div className="tournament-details">
                  <img
                    src="https://secure.gravatar.com/avatar/7542961e5d985ef8b34ce5ed2e6266a6?r=r&amp;s=40&amp;d=https://s3.amazonaws.com/challonge_app/misc/challonge_fireball_gray.png"
                    height="60px"
                    width="60px"
                  ></img>
                  <p className="title" key={tournament.id}>
                    {tournament.attributes.name}
                    <p className="tournament-type">
                      {`Tournament Type: ${tournament.attributes.tournamentType}`}
                    </p>
                    <p className="tournament-code">
                      {`Tournament Code: ${tournament.attributes.url}`}
                    </p>
                  </p>
                </div>

                <div className="delete-btn">
                  <button
                    onClick={() => {
                      delTournament(tournament.attributes.url);
                    }}
                  >
                    <img
                      src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-trash-can-9.png&r=255&g=255&b=255"
                      height="25px"
                    ></img>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default DeleteTournament;
