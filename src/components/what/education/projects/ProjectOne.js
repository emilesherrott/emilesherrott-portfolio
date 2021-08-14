import React from 'react'

import p1Img from '../../../../assets/what/projects/p1-img.png'

const ProjectOne = () => {

  return (
    <artcile>
      <h4>emilesherrott-ga-project-1</h4>
      <div>
        <a href="https://emilesherrott.github.io/emilesherrott-ga-project-1/" target="_blank" rel="noreferrer" className="scss-what-education-project-links">
          <img src={p1Img} alt="project one image" className="scss-what-education-project-image" />
        </a>
      </div>
      <div className="scss-who-what-where-para-text">
        <p>Individual Project / 7 Days</p>
        <p>
          <a href="https://emilesherrott.github.io/emilesherrott-ga-project-1/" target="_blank" rel="noreferrer" className="scss-what-education-project-links">Deployment</a>
          <span> / </span>
          <a href="https://github.com/emilesherrott/emilesherrott-ga-project-1#readme" target="_blank" rel="noreferrer" className="scss-what-education-project-links">ReadMe</a>
        </p>
      </div>
    </artcile>
  )
}

export default ProjectOne