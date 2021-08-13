import React from 'react'

import sei from '../../../assets/home/qualifications/sei.jpg'

const SoftwareEngineeringImmersive = () => {

  return (
    <div className="modal fade" id="software-engineering-immersive" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Software Engineering Immersive</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={sei} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">3 month Software Engineering course building practical and collaborative skills through 4 modules respective projects.</p>
              <p className="scss-secondary-color-font">480 hours</p>
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

export default SoftwareEngineeringImmersive