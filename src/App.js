import React from 'react';

import logo from './logo.svg';
import photoSofia from "./Images/me.JPG"
import photoShaina from "./Images/Shaina.jpg"
import photoFacundo from "./Images/Facundo.jpg"

import './App.css';

import Card from './components/Card'

const data = 
  [
    { 
    urlImage: photoSofia,
    name: "Sofía Rey",
    title: "Developer in Arkano Software",
    urlFacebook: "https://www.facebook.com",
    urlLinkedin: "https://www.linkedin.com",
    urlTwitter: "https://www.twitter.com"
  },{
    urlImage: photoShaina,
    name: "Shaina De Los Santos",
    title: "Developer in LoopStudio",
    urlFacebook: "https://www.facebook.com",
    urlLinkedin: "https://www.linkedin.com",
    urlTwitter: "https://www.twitter.com" 
  },{
    urlImage: photoFacundo,
    name: "Facundo Centurión",
    title: "Developer in Effectus",
    urlFacebook: "https://www.facebook.com",
    urlLinkedin: "https://www.linkedin.com",
    urlTwitter: "https://www.twitter.com" 
  }
]

function App() {
  return (
    <div className="App">
        <header className="App-header">
        {data.map(student =>
          <Card urlImg={student.urlImage} name={student.name} title={student.title} urlFacebook={student.urlFacebook} urlLinkedin={student.urlLinkedin} urlTwitter={student.urlTwitter}></Card>
        )}
          {/* <div className="card">
          <Card></Card>
            <img src={data.urlImage} className="photo" alt="Mi foto" />
            <h2>{data.name}</h2>
            <h4>{data.title}</h4>
            <a href={data.urlFacebook}><img src={facebookIcon} className="icon" alt="Icono de Facebook"/></a>
            <a href={data.urlLinkedin}><img src={linkedinIcon} className="icon" alt="Icono de LinkedIn"/></a>
            <a href={data.urlTwitter}><img src={twitterIcon} className="icon" alt="Icono de Twitter"/></a>
          </div>
          <div className="card">
            <img src={data.urlImage} className="photo" alt="Mi foto" />
            <h2>{data.name}</h2>
            <h4>{data.title}</h4>
            <a href={data.urlFacebook}><img src={facebookIcon} className="icon" alt="Icono de Facebook"/></a>
            <a href={data.urlLinkedin}><img src={linkedinIcon} className="icon" alt="Icono de LinkedIn"/></a>
            <a href={data.urlTwitter}><img src={twitterIcon} className="icon" alt="Icono de Twitter"/></a>
          </div>
          <div className="card">
            <img src={data.urlImage} className="photo" alt="Mi foto" />
            <h2>{data.name}</h2>
            <h4>{data.title}</h4>
            <a href={data.urlFacebook}><img src={facebookIcon} className="icon" alt="Icono de Facebook"/></a>
            <a href={data.urlLinkedin}><img src={linkedinIcon} className="icon" alt="Icono de LinkedIn"/></a>
            <a href={data.urlTwitter}><img src={twitterIcon} className="icon" alt="Icono de Twitter"/></a>
          </div> */}
        </header>
    </div>
  );
}

export default App;
