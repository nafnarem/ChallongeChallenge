import { useState } from "react";
import Instance from "./Instance";

const CreateTournament = (props) =>{
    const [inputName, setInputName] = useState("")
    const [inputUrl, setInputUrl]= useState("")
    const [inputMode, setInputMode] = useState("single elimination")
    const [isPending, setIsPending] = useState(true)
    const postData =(e)=>{
    e.preventDefault(); 
        Instance.post('/tournaments.json', {
            "data": {
                "type": "Tournaments",
                "attributes": {
                    "name": inputName,
                    "url": inputUrl,
                    "tournament_type": inputMode,
                    }
                }
            }).then((response) => {
            console.log(response);
            setIsPending(false);
          })
            .catch((error) => { console.error(error) })
    }
    return(
        <form>
            <label>Name</label>
            <input required value={inputName} onChange={e => setInputName(e.target.value)}></input>
            
            <label>Url</label>
            <input required value={inputUrl} onChange={e => setInputUrl(e.target.value)}></input>
            
            <label>Tournament mode</label>
            <select value={inputMode} onChange={e => setInputMode(e.target.value)}>
             <option value="single elimination">Single Elimination</option>
             <option value="double elimination">Double Elimination</option>
            </select>
            <button onClick={postData}>Submit</button>
        </form>
    )
}
export default CreateTournament;