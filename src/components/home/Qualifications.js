import React from 'react'

import SoftwareEngineeringImmersive from './modal/SoftwareEngineeringImmersive'
import LearnJavaScript from './modal/LearnJavaScript'
import LearnAsynchronousJS from './modal/LearnAsynchronousJS'
import HowToDebug from './modal/HowToDebug'
import LearnReact from './modal/LearnReact'
import LearnIntermediateCSS from './modal/LearnIntermediateCSS'
import LearnResponsiveDesign from './modal/LearnResponsiveDesign'
import LearnSass from './modal/LearnSass'
import LearnBootstrap from './modal/LearnBootstrap'
import LearnNode from './modal/LearnNode'
import LearnExpress from './modal/LearnExpress'
import LearnGit from './modal/LearnGit'
import LearnCommandLine from './modal/LearnCommandLine'
import LearnRegEx from './modal/LearnRegEx'
import ComputerSystems from './modal/ComputerSystems'
import DataProcesses from './modal/DataProcesses'
import InternetOE from './modal/InternetOE'
import DigitalMarketing from './modal/DigitalMarketing'


import ga from '../../assets/home/qualifications/logos/ga.png'
import cc from '../../assets/home/qualifications/logos/cc.png'
import ou from '../../assets/home/qualifications/logos/ou.png'
import cisco from '../../assets/home/qualifications/logos/cisco.png'
import g from '../../assets/home/qualifications/logos/g.png'

const Qualifications = () => {

  return (
    <section>
      <div className="container scss-qualifications-body">
        <div className="justify-content-center">
          <div className="scss-qualifications-title-section">
            <h2 className="scss-qualifications-title">Certificates</h2>
            <h4 className="scss-qualifications-subtitle">Click icons to see certification</h4>
          </div>
          <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#software-engineering-immersive">
                <div className="d-flex justify-content-center scss-qualifications-text">Software Engineering Immersive</div>
                <div className="d-flex justify-content-center"><img src={ga} alt="general assembly logo" className="scss-qualifications-img" /></div>
              </button>
              <SoftwareEngineeringImmersive />
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-javascript">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn JavaScript</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnJavaScript />
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-asynchronous-javascript">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn Asynchronous JavaScript</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnAsynchronousJS />
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#how-to-debug">
                <div className="d-flex justify-content-center scss-qualifications-text">How to Debug JavaScript Errors</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <HowToDebug />
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-react">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn React</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnReact />
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-css">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn Intermediate CSS</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnIntermediateCSS />
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-responsive-design">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn Responsive Design</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnResponsiveDesign />
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-sass">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn Sass</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnSass />
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-bootstrap">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn Bootstrap</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnBootstrap />
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-node">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn Node.js</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnNode />
            </div>
            <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
              <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-express">
                <div className="d-flex justify-content-center scss-qualifications-text">Learn Express</div>
                <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
              </button>
              <LearnExpress />
            </div>
            <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
              <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
                <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-git">
                  <div className="d-flex justify-content-center scss-qualifications-text">Learn Git</div>
                  <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
                </button>
                <LearnGit />
              </div>
              <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
                <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-command-line">
                  <div className="d-flex justify-content-center scss-qualifications-text">Learn Command Line</div>
                  <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
                </button>
                <LearnCommandLine />
              </div>
              <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
                <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#learn-regex">
                  <div className="d-flex justify-content-center scss-qualifications-text">Learn the basics of RegEx</div>
                  <div className="d-flex justify-content-center"><img src={cc} alt="codecademy logo" className="scss-qualifications-img" /></div>
                </button>
                <LearnRegEx />
              </div>
            </div>
            <div className="row d-flex flex-wrap justify-content-center align-items-end scss-qualifications-row">
              <div className="col-6 col-md-4 col-lg-2 col-xxl-2">

                <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#ou-computers">
                  <div className="d-flex justify-content-center scss-qualifications-text">Computers and Computer Systems</div>
                  <div className="d-flex justify-content-center"><img src={ou} alt="open university logo" className="scss-qualifications-img" /></div>
                </button>
                <ComputerSystems />
              </div>
              <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
                <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#ou-data">
                  <div className="d-flex justify-content-center scss-qualifications-text">Data and Processes in Computing</div>
                  <div className="d-flex justify-content-center"><img src={ou} alt="open university logo" className="scss-qualifications-img" /></div>
                </button>
                <DataProcesses />
              </div>
              <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
                <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#ouInternet">
                  <div className="d-flex justify-content-center scss-qualifications-text">Internet of Everything</div>
                  <div className="d-flex justify-content-center"><img src={cisco} alt="cisco logo" className="scss-qualifications-img" /></div>
                </button>
                <InternetOE />
              </div>
              <div className="col-6 col-md-4 col-lg-2 col-xxl-2">
                <button type="button" className="btn btn-primary scss-modal-button" data-bs-toggle="modal" data-bs-target="#googleMarketing">
                  <div className="d-flex justify-content-center scss-qualifications-text">Fundamentals of Digital Marketing</div>
                  <div className="d-flex justify-content-center"><img src={g} alt="google logo" className="scss-qualifications-img-google" /></div>
                </button>
                <DigitalMarketing />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualifications