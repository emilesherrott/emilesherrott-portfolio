import React from 'react'

import Overflow from './home/Overflow'

import Experience from '../components/what/Experience'
import Education from '../components/what/Education'

const What = () => {

  return (
    <div>
      <h2 className="d-flex justify-content-center scss-who-what-where-title">What has he even done?</h2>
      <Overflow />
      <div className="container">
        <div className="d-flex scss-what-main">
          <Experience />
          <Education />
        </div>
      </div>
    </div >
  )
}

export default What