import React from 'react'

import jamaicaFlag from '../../assets/home/jamaica-flag.png'

const AboutMe = () => {

  return (
    <div className="container d-flex">
      <div>About me text</div>
      <div>
        <div className="row">
          <div className="col-sm">1/3</div>
          <div className="col-sm"><img className="scss-home-aboutme-img" src={jamaicaFlag} /></div>
          <div className="col-sm">3/3</div>
        </div>
        <div className="row">
          <div className="col-sm">1/3</div>
          <div className="col-sm">2/3</div>
          <div className="col-sm">3/3</div>
        </div>
        <div className="row">
          <div className="col-sm">1/3</div>
          <div className="col-sm">2/3</div>
          <div className="col-sm">3/3</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe