import React from 'react'
import { data } from './data'
import './TeamUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const TeamUp = () => {
  return (
    <div className='container'>
       <div className="clxs">
         <h2 className='titlemain'>Our Team</h2>
       </div>
    <div className="warapTeamup">
            {data.map((member) => (
          <div className="team_card">
            <img src={member.tm} alt={member.teacherName} className="team-img" />
            <div className="boxteamup">
                <p className="mainpara">{member.teach}</p>
                <h3 className="team_name">{member.teacherName}</h3>
                {/* <p className="mainpara">{member.paraTeam}</p> */}
            
            <div className="teacherSocialmedia">
                <a href={member.fb}><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
            </div>
          </div>
        ))}
        
    </div>
    </div>
  )
}

export default TeamUp
