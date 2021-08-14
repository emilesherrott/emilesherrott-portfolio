import React from 'react'

import p4Img from '../../../../assets/what/projects/p4-img.png'

const ProjectFour = () => {

  return (
    <artcile>
      <h4>emilesherrott-ga-project-4</h4>
      <div>
        <img src={p4Img} alt="project four image" className="scss-what-education-project-image" />
      </div>
      <p>Individual Project / 7 Days</p>
      <p>
        <a href="https://emilesherrott-ga-project-4.herokuapp.com/" target="_blank" rel="noreferrer" className="scss-what-education-project-links">Deployment</a>
        <span> / </span>
        <a href="https://github.com/emilesherrott/emilesherrott-ga-project-4#readme" target="_blank" rel="noreferrer" className="scss-what-education-project-links">ReadMe</a>
      </p>
    </artcile>
  )
}

export default ProjectFour