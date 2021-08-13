import React from 'react'

import learnTCL from '../../../assets/home/qualifications/learnTCL.jpg'

const LearnCommandLine = () => {

  return (
    <div className="modal fade" id="learn-command-line" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Learn Command Line</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={learnTCL} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">Learn how to navigate, access, and modify files and folders on your computer.</p>
              <p className="scss-secondary-color-font">8 hours</p>
              <p className="scss-secondary-color-font"><a href="https://www.codecademy.com/profiles/EmileSherrott/certificates/c87ba0541f8be78bc2f4ba1128233f6f" target="_blank" rel="noreferrer">Credentials</a> </p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnCommandLine