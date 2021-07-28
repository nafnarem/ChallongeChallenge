import Instance from "./Instance"
const DisplayTournaments = (props) => {

        return (
        <div>
            {props.props.data.data.map((tournament) => {
                return(
                    <p key={tournament.id}>
                        {tournament.attributes.name}<br/>
                        {tournament.attributes.url}
                        
                    </p>
                )
            })}
        </div>
        )
}
export default DisplayTournaments;