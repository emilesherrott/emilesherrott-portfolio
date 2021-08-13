import React from 'react'

import learnRD from '../../../assets/home/qualifications/learnRD.jpg'

const LearnResponsiveDesign = () => {

  return (
    <div className="modal fade" id="learn-responsive-design" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Learn Responsive Design</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={learnRD} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">How to use relative units and media queries to create websites that can be viewed across devices of all sizes.</p>
              <p className="scss-secondary-color-font">2 hours</p>
              <p className="scss-secondary-color-font"><a href="https://www.codecademy.com/profiles/EmileSherrott/certificates/3a62023b0054dc793edc0adecd715fd7" target="_blank" rel="noreferrer">Credentials</a> </p>
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

export default LearnResponsiveDesign