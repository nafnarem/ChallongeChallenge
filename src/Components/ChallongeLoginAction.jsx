import React, { useEffect, useState} from "react";
import ResponseData from "./ResponseData";
import { BrowserRouter as Router, Switch,
  Route,
  Link } from "react-router-dom";
import Instance from "./Instance";
import DeleteForm from "./DeleteForm";
import DeleteTournament from "./DeleteTournament";
import EditTournament from "./EditTournament";
import GetTournament from "./GetTournaments";
import CreateTournament from "./CreateTournament";
const ChallongeLoginAction = () => {
    const [tournaments, setTournaments] = useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const [createTourn, setCreateTourn] = useState([]);
    const [delTourn, setDelTourn] = useState([]);
    const [updateTourn, setUpdateTourn] = useState([]);
    useEffect(() => {
        Instance.get("/tournaments.json", {data:null})
        .then((response) => {
          setTournaments(response)
          setIsLoading(false)
        })
          .catch((error) => { console.error(error) })
      }, [tournaments])

      // useEffect(() => {
      //   Instance.post('/tournaments.json', {
      //     "data": {
      //         "type": "Tournaments",
      //         "attributes": {
      //             "name": "SampleTournament4",
      //             "url": "sample4_xx",
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
         <Link to="/get"><button className="btn btn-primary my-3" id="get">GET</button></Link> 
         <Link to="/post"><button className="btn btn-info" id="post">POST</button></Link> 
          <Link to="/edit"><button className="btn btn-warning" id="update">PUT/PATCH</button></Link>
          <Link to="/delete"><button className="btn btn-danger" id="delete">DELETE</button></Link>
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
        <hr />
        <div id="res">
         
            <Switch>
              <Route exact path="/get">
              <GetTournament props={tournaments} isLoading={isLoading}/>
              </Route>
              <Route path="/post">
               <CreateTournament/>
              <ResponseData res={createTourn}/>
              </Route>
              <Route path="/delete">
                <DeleteTournament props={tournaments}  isLoading={isLoading}/>
                <DeleteForm/>
                <ResponseData res={delTourn}/>
              </Route>
              
              <Route path="/edit">
                <EditTournament props={tournaments}  isLoading={isLoading}/>
                <ResponseData res={updateTourn}/>
              </Route>
            </Switch>
          
          
        
         
        </div>
      </div>
      </Router>
      )

      
}

export default ChallongeLoginAction;