import Instance from "./Instance";
import { useState } from "react";
const EditTournament = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputMode, setInputMode] = useState("single elimination");
  const updateTournament = (e) => {
    e.preventDefault();
    Instance.put("/tournaments/" + inputUrl, {
      data: {
        type: "Tournaments",
        attributes: {
          name: inputName,
          url: inputUrl,
          tournament_type: inputMode,
        },
      },
    })

      .then((response) => {
        console.log(response);
        alert("Tournament details succesfully changed.");
      })
      .catch((error) => {
        console.error(error);
        alert(`${error}.`);
      });
    props.updated();
  };

  return (
    <div>
      <form>
        <div className="form-field-e">
          <label className="label-2">
            Enter the code of the tournament you want to change
          </label>
          <br></br>
          <input
            required
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          ></input>
        </div>
        <div className="form-field-e">
          <label className="label-2">Enter new tournament name</label>
          <input
            required
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          ></input>
        </div>
        <div className="form-field-e">
          <label className="label-2">Select new tournament type</label>
          <select
            value={inputMode}
            onChange={(e) => setInputMode(e.target.value)}
          >
            <option value="single elimination">Single Elimination</option>
            <option value="double elimination">Double Elimination</option>
          </select>
        </div>
        <div className="submit-btn-container">
          <button onClick={updateTournament}>CHANGE DETAILS</button>
        </div>
      </form>

      {/* {props.isLoading && <div>Loading...</div>}
      {!props.isLoading && (
        <div>
          {props.tournaments.data.data.map((tournament) => {
            return (
              <p key={tournament.id}>
                {tournament.attributes.name}
                <br />
                {tournament.attributes.url}
                <br />
                {tournament.attributes.tournamentType}
              </p>
            );
          })}
        </div>
      )} */}
    </div>
  );
};

export default EditTournament;
