import React from 'react'

import googleMarketing from '../../../assets/home/qualifications/googleMarketing.jpg'

const DigitalMarketing = () => {

  return (
    <div className="modal fade" id="googleMarketing" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Fundamentals of Digital Marketing</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={googleMarketing} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">Learn the fundamentals of digital marketing. Search Engine Optimisation (SEO), Search Engine Marketing (SEM), Social Media, Local Advertising, Display Ads and more.</p>
              <p className="scss-secondary-color-font">40 hours</p>
              <p className="scss-secondary-color-font">Credential ID: <span className="scss-modal-highlighted-text">JHQ DF6 CN9</span></p>
              <p className="scss-secondary-color-font"><a href="https://learndigital.withgoogle.com/digitalgarage/validate-certificate-code" target="_blank" rel="noreferrer">Credentials</a> </p>
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

export default DigitalMarketing