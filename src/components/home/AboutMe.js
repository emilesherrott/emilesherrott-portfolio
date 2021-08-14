import React from 'react'


import arsenal from '../../assets/home/aboutme/arsenal.png'
import windies from '../../assets/home/aboutme/windies.png'
import emile from '../../assets/home/aboutme/emile.png'


const AboutMe = () => {

  return (
    <section className="scss-aboutme-body">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row align-items-start">
          <h2 className="scss-aboutme-title">About Me</h2>
          <div className="scss-aboutme-text">
            <p>Hello! My name is Emile and I&#39;m a Junior Developer. I used to work for different charities, education and youth organisations. My journey into code has been slow and steady, building up knowledge, confidence and the finances to make a career change. I&#39;ve recently finished a Software Engineering course which now signals the beginning of my search for a new career and a new chapter of continued learning.</p>
            <p className="scss-aboutme-last-text">I love my cycling, hiking and cooking... and of course coding.</p>
          </div>
          <div className="scss-aboutme-images">
            <img src={emile} alt="image of emile" className="scss-aboutme-image scss-aboutme-emile" />
            <img src={arsenal} alt="arsenal underground" className="scss-aboutme-image scss-aboutme-arsenal" />
            <img src={windies} alt="west indies cricket logo" className="scss-aboutme-image scss-aboutme-windies" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe