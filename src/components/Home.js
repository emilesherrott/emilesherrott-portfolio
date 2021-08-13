import React from 'react'

import Overflow from './home/Overflow'
// import AboutMe from './home/AboutMe'
import Qualifications from './home/Qualifications'

const Home = () => {

  const title = '{emilesherrott.com}'

  return (
    <div>
      <h1 className="d-flex justify-content-center scss-home-title">{title}</h1>
      <Overflow />
      {/* <AboutMe /> */}
      <Qualifications />
    </div>
  )
}

export default Home