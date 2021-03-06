import React from 'react'
import { Link } from 'react-router-dom'

import Time from './Time'

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light scss-nav-body">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><Time /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/who">Who is Emile?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/what">What has he even done?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/where">Where does he want to go?</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav