// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="loss-win-image"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-text">{competingTeam}</p>
      <p className="loss-win-text">{result}</p>
      <p className="text">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
