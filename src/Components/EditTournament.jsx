import Instance from "./Instance"
const EditTournament = (props) => {
    const updateTournament=(url)=>{
        Instance
        .put('/tournaments/'+url, {data:null})
        .then((response) => {
          console.log(response)
        })
          .catch((error) => { console.error(error) })
      }
    
        return (
            <div>
            {props.isLoading && <div>Loading..</div>}
    {!props.isLoading && 
        <div>
            {props.props.data.data.map((tournament) => {
                return(
                    <p key={tournament.id}>
                        {tournament.attributes.name}<br/>
                        {tournament.attributes.url}
                        <button onClick={()=>{updateTournament(tournament.attributes.url)}}>Edit</button>
                    </p>
                )
            })}
        </div>}
        </div>
        )
}
export default EditTournament;