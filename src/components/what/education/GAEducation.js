import React, { useState } from 'react'

import ga from '../../../assets/what/ga.png'

import ProjectOne from './projects/ProjectOne'
import ProjectTwo from './projects/ProjectTwo'
import ProjectThree from './projects/ProjectThree'
import ProjectFour from './projects/ProjectFour'

const GAEducation = () => {

  const [project, setProject] = useState(<ProjectOne />)
  const previousProject = () => {
    console.log(project.type.name)
    if (project.type.name === 'ProjectOne') {
      setProject(<ProjectOne />)
    } else if (project.type.name === 'ProjectTwo') {
      setProject(<ProjectOne />)
    } else if (project.type.name === 'ProjectThree') {
      setProject(<ProjectTwo />)
    } else if (project.type.name === 'ProjectFour') {
      setProject(<ProjectThree />)
    } 
  }

  const nextProject = () => {
    console.log('click')
    if (project.type.name === 'ProjectOne') {
      setProject(<ProjectTwo />)
    } else if (project.type.name === 'ProjectTwo') {
      setProject(<ProjectThree />)
    } else if (project.type.name === 'ProjectThree') {
      setProject(<ProjectFour />)
    } else if (project.type.name === 'ProjectFour') {
      setProject(<ProjectFour />)
    }
  }    

  console.log(project.type.name)

  return (
    <article className="scss-what-article scss-what-education-article">
      <h4>Software Engineering Immersive</h4>
      <h5><img src={ga} alt="ga logo" className="scss-what-experience-logo" /> General Assemvly</h5>
      <div>
        {project}
      </div>
      <div className="scss-what-education-project-button-section">
        <p className="scss-what-education-project-button" onClick={previousProject}>Previous</p>
        <p className="scss-what-education-project-button" onClick={nextProject}>Next</p>
      </div>
    </article>
  )
}

export default GAEducation