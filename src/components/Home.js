import React from 'react'

const Home = () => {

  const title = '{emilesherrott.com}'

  return (
    <>
      <h1 className="d-flex justify-content-center">{title}</h1>
      <div className="scss-off-canvas">
        <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          Menu
        </a>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="offcanvas-header">
            <h4 className="offcanvas-title scss-secondary-color-font" id="offcanvasExampleLabel">Hello friend!</h4>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body scss-secondary-color-font">
            <div>
              Welcome to emilesherrott.com, I&#39;ve taken the pleasure of arranging a collection of items pertaining to myself on this site.
              I hope you enjoy looking and if you do find any bugs please don&#39;t hesitate to contact me.
            </div>
            <div className="dropdown mt-3 d-flex justify-content-start">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                More
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">Who is Emile?</a></li>
                <li><a className="dropdown-item" href="#">What has he even done?</a></li>
                <li><a className="dropdown-item" href="#">Where does he want to go?</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home