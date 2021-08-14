import React from 'react'

import p2Img from '../../../../assets/what/projects/p2-img.png'

const ProjectTwo = () => {

  return (
    <artcile>
      <h4>emilesherrott-ga-project-2</h4>
      <div>
        <a href="https://emilesherrott-ga-project-2.netlify.app/" target="_blank" rel="noreferrer" className="scss-what-education-project-links">
          <img src={p2Img} alt="project two image" className="scss-what-education-project-image" />
        </a>
      </div>
      <p>Pair coded / 2 Days</p>
      <p>
        <a href="https://emilesherrott-ga-project-2.netlify.app/" target="_blank" rel="noreferrer" className="scss-what-education-project-links">Deployment</a>
        <span> / </span>
        <a href="https://github.com/emilesherrott/emilesherrott-ga-project-2#readme" target="_blank" rel="noreferrer" className="scss-what-education-project-links">ReadMe</a>
      </p>
    </artcile>
  )
}

export default ProjectTwo