import React, { useState } from 'react'

import ga from '../../../assets/what/ga.png'

import ProjectOne from './projects/ProjectOne'
import ProjectTwo from './projects/ProjectTwo'
import ProjectThree from './projects/ProjectThree'
import ProjectFour from './projects/ProjectFour'

const GAEducation = () => {

  const [project, setProject] = useState(<ProjectOne />)
  const [count, setCount] = useState(1)
  const previousProject = () => {
    if (count > 1) setCount(count - 1)
    if (count === 4) {
      setProject(<ProjectThree />)
    } else if (count === 3) {
      setProject(<ProjectTwo />)
    } else if (count === 2) {
      setProject(<ProjectOne />)
    } else {
      setProject(<ProjectOne />)
    }
  }

  const nextProject = () => {
    if (count < 4) setCount(count + 1)
    if (count === 1) {
      setProject(<ProjectTwo />)
    } else if (count === 2) {
      setProject(<ProjectThree />)
    } else if (count === 3) {
      setProject(<ProjectFour />)
    } else {
      setProject(<ProjectFour />)
    }
  }

  return (
    <article className="scss-what-article scss-what-education-article">
      <h4 className="scss-what-main-title">Software Engineering Immersive</h4>
      <h5><img src={ga} alt="ga logo" className="scss-what-experience-logo" /> General Assemvly</h5>
      <div>
        {project}
      </div>
      <div className="scss-what-education-project-button-section scss-who-what-where-para-text">
        <p className="scss-what-education-project-button" onClick={previousProject} onTouchStart={previousProject}>Previous</p>
        <p className="scss-what-education-project-button" onClick={nextProject} onTouchStart={previousProject}>Next</p>
      </div>
    </article>
  )
}

export default GAEducation