import React from 'react'

import barclays from '../../../assets/what/barclays.png'
import ga from '../../../assets/what/ga.png'

const GABarclays = () => {

  return (
    <article className="scss-what-article">
      <h4>Instructor Associate</h4>
      <h5>General Assembly <img src={ga} alt="ga logo" className="scss-what-experience-logo" /> / Barclays <img src={barclays} alt="barclays logo" className="scss-what-experience-logo" /></h5>
      <h5>August - September 2021</h5>
      <p>Secondary instructor delivering JavaScript fundamentals course to participants of Barclays graduate programme.</p>
      <ul>
        <li>Support learners with JavaScript concepts, syntax, debugging and writting clean code</li>
        <li>Sharing of learner resources</li>
        <li>Operation of work channels: Zoom & Slack</li>
      </ul>
    </article>
  )
}

export default GABarclays