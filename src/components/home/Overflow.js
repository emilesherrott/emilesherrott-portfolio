import React from 'react'
import { Link } from 'react-router-dom'

import Time from '../Time'

const Overflow = () => {

  return (
    <div className="scss-off-canvas">
      <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Menu
      </a>
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <div className="offcanvas-title scss-secondary-color-font" id="offcanvasExampleLabel"><Time /></div>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body scss-secondary-color-font">
          <div className="scss-offcanvas-text">
            Welcome to <span className="scss-offcanvas-address">emilesherrott.com</span>, I&#39;ve taken the pleasure of arranging a collection of items pertaining to myself.
          </div>
          <div className="dropdown mt-3 d-flex justify-content-start">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
              More
            </button>
            <ul className="dropdown-menu scss-offcanvas-dropdown" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" to="/">Home</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/who">Who is Emile?</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/what">What has he even done?</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/where">Where does he want to go?</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overflow