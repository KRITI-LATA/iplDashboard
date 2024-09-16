// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {getData: [], isLoading: true}

  componentDidMount() {
    this.getTeam()
  }

  getTeam = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplData = await response.json()
    const formattedData = iplData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({getData: formattedData, isLoading: false})
  }

  renderTeamList = () => {
    const {getData} = this.state

    return (
      <ul className="list-container">
        {getData.map(eachTeam => (
          <TeamCard getIplData={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-con">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="main-container">
        <div className="heading-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="loader-data">
          {isLoading ? this.renderLoader() : this.renderTeamList()}
        </div>
      </div>
    )
  }
}
export default Home
