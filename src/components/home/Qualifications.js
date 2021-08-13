import React from 'react'

import SoftwareEngineeringImmersive from './modal/SoftwareEngineeringImmersive'


import ga from '../../assets/home/qualifications/logos/ga.png'
import cc from '../../assets/home/qualifications/logos/cc.png'
import ou from '../../assets/home/qualifications/logos/ou.png'
import cisco from '../../assets/home/qualifications/logos/cisco.png'
import g from '../../assets/home/qualifications/logos/g.png'

const Qualifications = () => {

  return (
    <>
      <div className="container">
        <div className="justify-content-center">
          <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">


              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#software-engineering-immersive">
                <div className="d-flex justify-content-center scss-qualifications-text">Software Engineering Immersive</div>
                <div className="d-flex justify-content-center"><img src={ga} alt="general assembly logo" className="scss-qualifications-img" /></div>
              </button>
              <SoftwareEngineeringImmersive />




            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn JavaScript</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn Asynchronous JavaScript</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn React</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">How to Debug JavaScript Errors</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn Intermediate CSS</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn Sass</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn Bootstrap</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn Node.js</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn Express</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn Git</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn Command Line</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Learn the basics of RegEx</div>
              <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Computers and Computer Systems</div>
              <div className="d-flex justify-content-center"><img src={ou} alt="open university logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Data and Processes in Computing</div>
              <div className="d-flex justify-content-center"><img src={ou} alt="open university logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Internet of Everything</div>
              <div className="d-flex justify-content-center"><img src={cisco} alt="cisco logo" className="scss-qualifications-img" /></div>
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-1">
              <div className="d-flex justify-content-center scss-qualifications-text">Fundamentals of Digital Marketing</div>
              <div className="d-flex justify-content-center"><img src={g} alt="google logo" className="scss-qualifications-img-google" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qualifications