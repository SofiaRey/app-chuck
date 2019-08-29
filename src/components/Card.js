import React from 'react'
import facebookIcon from "../Images/facebookIcon.png"
import linkedinIcon from "../Images/linkedinIcon.png"
import twitterIcon from "../Images/twitterIcon.png"

class Card extends React.Component {

    render() {
        return (
            <div className="card">
                <img src={this.props.urlImg} className="photo" alt="Mi foto" />
                <h2>{this.props.name}</h2>
                <h4>{this.props.title}</h4>
                <div className="containerIcons">
                    <a href={this.props.urlFacebook}><img src={facebookIcon} className="icon" alt="Icono de Facebook"/></a>
                    <a href={this.props.urlLinkedin}><img src={linkedinIcon} className="icon" alt="Icono de LinkedIn"/></a>
                    <a href={this.props.urlTwitter}><img src={twitterIcon} className="icon" alt="Icono de Twitter"/></a>
                </div>
            </div>
        )
    }
}

export default Card