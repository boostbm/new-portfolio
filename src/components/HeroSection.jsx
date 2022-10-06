import React from "react"
import "../components/HeroSection.css"
import Fade from "react-reveal/Fade"

function HeroSection() {
  return (
    <div className="container">
      <Fade>
        <h1 className="hero_h1">DAVID YU</h1>
        <p className="hero_p">
          FRONT-END DEVELOPER / B-BOY / JIU JITSU PRACTICTIONER
        </p>
        <div className="hero_button">
          <button>Learn More</button>
        </div>
      </Fade>
    </div>
  )
}

export default HeroSection
