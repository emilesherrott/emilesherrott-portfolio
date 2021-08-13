import React from 'react'

import ouComputers from '../../../assets/home/qualifications/ouComputers.jpg'

const ComputerSystems = () => {

  return (
    <div className="modal fade" id="ou-computers" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title scss-secondary-color-font" id="staticBackdropLabel">Computers and Computer Systems</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex flex-column justify-content-center align-items-center">
            <img src={ouComputers} alt="sei certificate" className="scss-modal-certificate-img" />
            <div className="scss-modal-body-text">
              <p className="scss-secondary-color-font">Learn how computerised devices process data and respond to instruction.</p>
              <p className="scss-secondary-color-font">20 hours</p>
              <p className="scss-secondary-color-font"><a href="https://www.open.edu/openlearn/ocw/blocks/ocwstatement/statement.php?id=545&user=2758348&f=1" target="_blank" rel="noreferrer">Credentials</a> </p>
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

export default ComputerSystems