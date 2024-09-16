// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, getTeamMatchesData: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    const updatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: this.getFormattedData(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({getTeamMatchesData: updatedData, isLoading: false})
  }

  renderRecentMatchesList = () => {
    const {getTeamMatchesData} = this.state
    const {recentMatches} = getTeamMatchesData
    return (
      <ul className="recent-Matches-list">
        {recentMatches.map(recentMatch => (
          <MatchCard matchDetails={recentMatch} key={recentMatch.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {getTeamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = getTeamMatchesData

    return (
      <div className="team-match-container">
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <LatestMatch latestMatchData={latestMatchDetails} />
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="match-container">
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
