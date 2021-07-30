import { useState } from "react";
import Instance from "./Instance";
import GetTournament from "./GetTournaments";
import "./CreateTournament.css";

const CreateTournament = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputMode, setInputMode] = useState("single elimination");
  const { isLoading, tournaments } = props;
  const postData = (e) => {
    e.preventDefault();
    Instance.post("/tournaments", {
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
        alert(`${response.data.data.attributes.name} is added to the list.`);
      })
      .catch((error) => {
        console.error(error);
        alert(`${error}.`);
      });
    props.updated();
    <GetTournament tournaments={tournaments} isLoading={isLoading} />;
  };
  return (
    <div>
      <form>
        <div className="form-field">
          <label>Name</label>
          <input
            required
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <label>Code</label>
          <input
            required
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
          ></input>
        </div>
        <div className="form-field">
          <label>Type</label>
          <select
            value={inputMode}
            onChange={(e) => setInputMode(e.target.value)}
          >
            <option value="single elimination">Single Elimination</option>
            <option value="double elimination">Double Elimination</option>
          </select>
        </div>
        <div className="submit-btn-container">
          <button onClick={postData}>SUBMIT</button>
        </div>
      </form>
      {/* <GetTournament tournaments={tournaments} isLoading={isLoading} /> */}
    </div>
  );
};
export default CreateTournament;
