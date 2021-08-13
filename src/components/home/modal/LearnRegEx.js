import React from 'react'

import learnRegEx from '../../../assets/home/qualifications/learnRegEx.jpg'

const LearnRegEx = () => {

  return (
    <div className="modal fade" id="learn-regex" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Learn the basics of RegEx</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={learnRegEx} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">Learn the tool to search for and find patterns in strings.</p>
              <p className="scss-secondary-color-font">1 hour</p>
              <p className="scss-secondary-color-font"><a href="https://www.codecademy.com/profiles/EmileSherrott/certificates/9da8e26980d5139405439ee7578b8b69" target="_blank" rel="noreferrer">Credentials</a> </p>
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

export default LearnRegEx