
const GetTournament = (props) => {
        return (
            <div>
                {props.isLoading && <div>Loading..</div>}
        {!props.isLoading && 
            <div>
            {props.tournaments.data.data.map((tourn) => {
                return(
                    <p key={tourn.id}>
                        {tourn.attributes.name}<br/>
                        {tourn.attributes.url}
                        {tourn.attributes.tournamentType}
                        
                    </p>
                )
            })}
            </div>}
            </div>
        )
}
export default GetTournament;