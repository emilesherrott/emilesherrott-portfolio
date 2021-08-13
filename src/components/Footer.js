import React from 'react'

import JavaScriptLogo from './footerLanguages/JavaScriptLogo'
import ReactLogo from './footerLanguages/ReactLogo'
import HTMLLogo from './footerLanguages/HTMLLogo'
import CSSLogo from './footerLanguages/CSSLogo'
import SassLogo from './footerLanguages/SassLogo'
import BootstrapLogo from './footerLanguages/BootstrapLogo'
import BulmaLogo from './footerLanguages/BulmaLogo'


import NodeLogo from './footerLanguages/NodeLogo'
import ExpressLogo from './footerLanguages/ExpressLogo'
import MongoLogo from './footerLanguages/MongoLogo'
// import MongooseLogo from './footerLanguages/MongooseLogo'
import PythonLogo from './footerLanguages/PythonLogo'
import DjangoLogo from './footerLanguages/DjangoLogo'
import PostgreSQLLogo from './footerLanguages/PostgreSQLLogo'


import GitLogo from './footerLanguages/GitLogo'
import GitHubLogo from './footerLanguages/GitHubLogo'
import YarnLogo from './footerLanguages/YarnLogo'

const Footer = () => {

  return (
    <div className="container scss-footer">
      <div className="row scss-footer-body">
        <div className="col col-lg-6 scss-footer-contactinfo">
          <a href="emilesherrott@gmail.com" target="_blank">
            <p className="scss-footer-text">emilesherrott@gmail.com</p>
          </a>
          <a href="https://github.com/emilesherrott" target="_blank" rel="noreferrer">
            <p className="scss-footer-text">github.com/emilesherrott</p>
          </a>
          <a href="https://www.linkedin.com/in/emilesherrott/" target="_blank" rel="noreferrer">
            <p className="scss-footer-text">linkedin.com/in/emilesherrott/</p>
          </a>
        </div>
        <div className="col col-lg-6 scss-footer-logo-section">

          <div className="scss-footer-skills">
            <p>Fontend:</p>
            <div className="d-flex">
              <JavaScriptLogo />
              <ReactLogo />
              <HTMLLogo />
              <CSSLogo />
              <SassLogo />
              <BootstrapLogo />
              <BulmaLogo />
            </div>
          </div>

          <div className="scss-footer-skills">
            <p>Backend:</p>
            <div className="d-flex">
              <NodeLogo />
              <ExpressLogo />
              <MongoLogo />
              {/* <MongooseLogo /> */}
              <PythonLogo />
              <DjangoLogo />
              <PostgreSQLLogo />
            </div>
          </div>

          <div className="scss-footer-skills">
            <p className="scss-footer-skill-type">Management & Deployment:</p>
            <div className="d-flex">
              <GitLogo />
              <GitHubLogo />
              <YarnLogo />
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Footer

