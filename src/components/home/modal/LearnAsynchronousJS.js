import React from 'react'

import learnAJS from '../../../assets/home/qualifications/learnAJS.jpg'

const LearnAsynchronousJS = () => {

  return (
    <div className="modal fade" id="learn-asynchronous-javascript" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Learn Asynchronous JavaScript</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={learnAJS} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">How to create and use JavaScript Promises as well as how to write clean, scalable code with the newer <span className="scss-modal-highlighted-text">async_await</span> syntax.</p>
              <p className="scss-secondary-color-font">1 hour</p>
              <p className="scss-secondary-color-font"><a href="https://www.codecademy.com/profiles/EmileSherrott/certificates/257c50bca4561663476f2fa8f6ac410c" target="_blank" rel="noreferrer">Credentials</a> </p>
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

export default LearnAsynchronousJS