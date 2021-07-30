import Instance from "./Instance"
import { useState } from "react"
const EditTournament = (props) => {
    const [inputName, setInputName] = useState("")
    const [inputUrl, setInputUrl]= useState("")
    const [inputMode, setInputMode] = useState("single elimination")
    const updateTournament =(e)=>{
        e.preventDefault();
        Instance
        .put('/tournaments/'+inputUrl, {
            "data": {
                "type": "Tournaments",
                "attributes": {
                    "name": inputName,
                    "url": inputUrl,
                    "tournament_type": inputMode,
                    }
                }})
        
        .then((response) => {
          console.log(response)
        })
          .catch((error) => { console.error(error) })
          props.updated();
    }
    
        return (
            <div>
                
                <label>Please enter the Url of the tournament you want to change</label>
                        
                        <input required value={inputUrl} onChange={e => setInputUrl(e.target.value)}></input>
                        <label>What is the new name?Name</label>
                        <input required value={inputName} onChange={e => setInputName(e.target.value)}></input>
                        <label>What is the new tournament mode?</label>
                        <select value={inputMode} onChange={e => setInputMode(e.target.value)}>
                        <option value="single elimination">Single Elimination</option>
                        <option value="double elimination">Double Elimination</option>
                        </select>
                        <button onClick={updateTournament}>ChangeDetails</button>
            {props.isLoading && <div>Loading..</div>}
    {!props.isLoading && 
        <div>
            {props.tournaments.data.data.map((tournament) => {
                
                return(
                    <p key={tournament.id}>
                        {tournament.attributes.name}<br/>
                        {tournament.attributes.url}<br/>
                        {tournament.attributes.tournamentType}
                        
                    </p>
                )
                
            })
            }
            
        </div>}
        </div>
        )
}

export default EditTournament;