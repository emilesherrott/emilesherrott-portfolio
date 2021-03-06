import React from 'react'

import p3Img from '../../../../assets/what/projects/p3-img.png'

const ProjectThree = () => {

  return (
    <artcile>
      <h4>emilesherrott-ga-project-3</h4>
      <div>
        <a href="https://emilesherrott-ga-project-3.herokuapp.com/" target="_blank" rel="noreferrer" className="scss-what-education-project-links">
          <img src={p3Img} alt="project three image" className="scss-what-education-project-image" />
        </a>
      </div>
      <div className="scss-who-what-where-para-text">
        <p>Team of four / 7 Days</p>
        <p>
          <a href="https://emilesherrott-ga-project-3.herokuapp.com/" target="_blank" rel="noreferrer" className="scss-what-education-project-links">Deployment</a>
          <span> / </span>
          <a href="https://github.com/emilesherrott/emilesherrott-ga-project-3#readme" target="_blank" rel="noreferrer" className="scss-what-education-project-links">ReadMe</a>
        </p>
      </div>
    </artcile>
  )
}

export default ProjectThree