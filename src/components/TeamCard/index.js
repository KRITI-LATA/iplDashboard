// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {getIplData} = props
  const {name, id, teamImageUrl} = getIplData

  return (
    <li className="team-container">
      <Link className="link-data" to={`/team-matches/${id}`}>
        <img className="link-image" src={teamImageUrl} alt={name} />
        <p className="team-heading">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
