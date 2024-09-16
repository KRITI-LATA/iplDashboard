// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData
  return (
    <div className="team-match-detail-container">
      <h1 className="match-latest-text">Latest Matches</h1>
      <div className="ipl-team-container">
        <p className="heading">{competingTeam}</p>
        <p className="date-text">{date}</p>
        <p className="stadium-text">{venue}</p>
        <p className="team-text">{result}</p>
      </div>
      <div className="team-image-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-image"
        />
      </div>
      <div className="ipl-detail-container">
        <p className="inning-text">First Innings</p>
        <p className="inning-text">{firstInnings}</p>
        <p className="inning-text">Second Innings</p>
        <p className="inning-text">{secondInnings}</p>
        <p className="inning-text">Man of the Match</p>
        <p className="inning-text">{manOfTheMatch}</p>
        <p className="inning-text">Umpires</p>
        <p className="inning-text">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
