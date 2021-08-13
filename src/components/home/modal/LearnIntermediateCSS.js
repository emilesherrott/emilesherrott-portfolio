import React from 'react'

import learnICSS from '../../../assets/home/qualifications/learnICSS.jpg'

const LearnIntermediateCSS = () => {

  return (
    <div className="modal fade" id="learn-css" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Learn Intermediate CSS</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={learnICSS} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">How to implement elegant transitions, create new layouts and give your website the flexibility to serve users with different window dimensions.</p>
              <p className="scss-secondary-color-font">15 hours</p>
              <p className="scss-secondary-color-font"><a href="https://www.codecademy.com/profiles/EmileSherrott/certificates/b3dec49423da50603c25618aee635027" target="_blank" rel="noreferrer">Credentials</a> </p>
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

export default LearnIntermediateCSS