import React, { useEffect, useState } from "react";
import ResponseData from "./ResponseData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Instance from "./Instance";
import DeleteForm from "./DeleteForm";
import DeleteTournament from "./DeleteTournament";
import EditTournament from "./EditTournament";
import GetTournament from "./GetTournaments";
import CreateTournament from "./CreateTournament";
import "./ChallongeLoginAction.css";
const ChallongeLoginAction = () => {
  const [tournaments, setTournaments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [createTourn, setCreateTourn] = useState([]);
  // const [delTourn, setDelTourn] = useState([]);
  // const [updateTourn, setUpdateTourn] = useState([]);
  const [update, setUpdate] = useState(0);
  const updated = () => {
    setUpdate(update + 1);
  };
  useEffect(() => {
    Instance.get("/tournaments", { data: null })
      .then((response) => {
        setTournaments(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [update]);

  // useEffect(() => {
  //   Instance.post('/tournaments', {
  //     "data": {
  //         "type": "Tournaments",
  //         "attributes": {
  //             "name": "SampleTournamentNumber4",
  //             "url": "sampleNumber4_xx",
  //             "tournament_type": "single elimination",
  //             }
  //         }
  //     }).then((response) => {
  //     setCreateTourn(response)
  //   })
  //     .catch((error) => { console.error(error) })
  // }, [createTourn])

  // useEffect(() => {
  //   Instance.delete('/tournaments/TestingLangHaha', {data:null})
  //   .then((response) => {
  //     setDelTourn(response)
  //   })
  //     .catch((error) => { console.error(error) })
  // }, [])

  // useEffect(() => {
  //   Instance.put("/tournaments/sample2_xx.json",{
  //     "data": {
  //         "type": "Tournaments",
  //         "attributes": {
  //             "name": "SampleTournament2Edited",
  //             "url": "sample2_xx",
  //             "tournament_type": "single elimination",
  //             }
  //         }})
  //   .then((response) => {
  //     setUpdateTourn(response)
  //   })
  //     .catch((error) => { console.error(error) })
  // }, [])

  return (
    // {
    //     tournaments.data.map((tournament) => {
    //         return(
    //             <p key={tournament.id}>
    //                 {tournament.attributes.name}
    //             </p>
    //         )
    //     })
    // }
    <Router>
      <div className="container my-5">
        <div className="text-center">
          <h1 className="display-4 text-center mb-3">Challonge Access</h1>
          <div className="btn-container">
            <Link to="/get">
              <button
                className="btn btn-primary my-3"
                id="get"
                onClick={updated}
              >
                TOURNAMENT LIST
              </button>
            </Link>
            <Link to="/post">
              <button className="btn btn-info" id="post" onClick={updated}>
                ADD TOURNAMENT
              </button>
            </Link>
            <Link to="/edit">
              <button className="btn btn-warning" id="update" onClick={updated}>
                EDIT TOURNAMENT
              </button>
            </Link>
            <Link to="/delete">
              <button className="btn btn-danger" id="delete" onClick={updated}>
                DELETE TOURNAMENT
              </button>
            </Link>
          </div>

          {/* <button className="btn btn-secondary" id="sim">Sim Requests</button>
          <button className="btn btn-secondary" id="headers">
            Custom Headers
          </button>
          <button className="btn btn-secondary" id="transform">
            Transform
          </button>
          <button className="btn btn-secondary" id="error">
            Error Handling
          </button>
          <button className="btn btn-secondary" id="cancel">
            Cancel
          </button> */}
        </div>
        <div id="res">
          <Switch>
            <Route exact path="/get">
              <GetTournament
                tournaments={tournaments}
                isLoading={isLoading}
                updated={updated}
              />
            </Route>
            <Route path="/post">
              <CreateTournament
                tournaments={tournaments}
                isLoading={isLoading}
                updated={updated}
              />
            </Route>
            <Route path="/delete">
              <DeleteTournament
                tournaments={tournaments}
                isLoading={isLoading}
                updated={updated}
              />
              {/* <DeleteForm /> */}
            </Route>

            <Route path="/edit">
              <EditTournament
                tournaments={tournaments}
                isLoading={isLoading}
                updated={updated}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default ChallongeLoginAction;
