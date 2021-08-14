import React from 'react'

import intra from '../../../assets/what/intra.png'
import amex from '../../../assets/what/amex.png'


const IntraClub = () => {

  return (
    <article className="scss-what-article scss-what-education-article">
      <h4>Software Developer Accelerator</h4>
      <h5><img src={intra} alt="intrapreneurs club logo" className="scss-what-education-logo" /> The Intrapreneurs Club</h5>
      <h5><img src={amex} alt="amex logo" className="scss-what-education-logo" /> supported by American Express </h5>
      <p className="scss-who-what-where-para-text">Technical masterclasses by industry experts (DevOps, Security, AI) and mentorship by the developers at American Express.</p>
    </article>
  )
}

export default IntraClub