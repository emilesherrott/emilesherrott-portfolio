import React from 'react'

import learnN from '../../../assets/home/qualifications/learnN.jpg'

const LearnNode = () => {

  return (
    <div className="modal fade" id="learn-node" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Learn Node.js</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={learnN} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">Learn the different parts that mak up the backend of a website or web application, and gain familiarity with the Node.js runtime environment.</p>
              <p className="scss-secondary-color-font">7 hours</p>
              <p className="scss-secondary-color-font"><a href="https://www.codecademy.com/profiles/EmileSherrott/certificates/240305d50b925c17868f1ac7a21a3261" target="_blank" rel="noreferrer">Credentials</a> </p>
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

export default LearnNode