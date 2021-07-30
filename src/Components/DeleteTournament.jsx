import { useState } from "react";
import React from 'react';
import Instance from "./Instance"
import Popup from "reactjs-popup";
const DeleteTournament = (props) => {
    const [del, setDel]= useState([]);
    const delTournament=(url)=>{
        Instance
        .delete('/tournaments/'+url, {data:null})
        .then((response) => {
            setDel(response)
        })
          .catch((error) => { console.error(error) })
          props.updated();
      }
        return (
            <div>
            {props.isLoading && <div>Loading..</div>}
    {!props.isLoading && 
        <div>
            {props.tournaments.data.data.map((tournament) => {
                return(
                    <p key={tournament.id}>
                        {tournament.attributes.name}<br/>
                        {tournament.attributes.url}<br/>
                        {tournament.attributes.tournamentType}
                        
  <Popup
    trigger={<button className="button"> Delete</button>} position="top left"
    modal
    nested
  >
    {close => (
      <div className="modal">
          <button onClick={()=>{delTournament(tournament.attributes.url)}}>Yes</button>
                        
          <button
            className="button"
            onClick={close}
          >
            Cancel It
          </button>
        </div>
    )}
  </Popup>
                    </p>
                    
                )
            })}
        </div>}
        </div>
        )
}
export default DeleteTournament;