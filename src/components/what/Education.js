import React from 'react'

import GAEducation from './education/GAEducation'
import IntraClub from './education/IntraClub'

const Education = () => {

  return (
    <section className="scss-what-experience-education-section">
      <h2 className="scss-what-education-title">Education</h2>
      <GAEducation />
      <IntraClub />
    </section>
  )
}

export default Education