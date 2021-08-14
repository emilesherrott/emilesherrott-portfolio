import React from 'react'

import Overflow from './home/Overflow'

const Where = () => {

  return (
    <div>
      <h2 className="d-flex justify-content-center scss-who-what-where-title">Where does he want to go?</h2>
      <Overflow />
      <div className="container scss-who-what-where-para-text">
        <p>Although I&#39;m happy with what I&#39;ve achieved, I know at this point I&#39;ve just scratched the surface in what I hope to know - which I find really exciting. It&#39;s important for me to continue learning to not only consolidate but my current skills but to expand them and ultimately write code which is used successfully by as many people as possible.</p>
        <p>I&#39;m keen to work in part of a diverse but close team and invest myself into the organisation. It&#39;s my hope to contribute to projects people are passionate about and which I am passionate about too.</p>
        <article className="d-flex scss-where-article">
          <div>
            <p className="scss-where-article-title">Positions I could fill:</p>
            <ul>
              <li>Junior Software Engineer</li>
              <li>Junior Web Developer</li>
              <li>Junior Frontend Engineer</li>
              <li>Junior Fullstack Developer: MERN</li>
            </ul>
          </div>
          <div className="scss-where-industry-section">
            <p className="scss-where-article-title">Industries I feel suited to:</p>
            <ul>
              <li>Financial Services</li>
              <li>Educational Services</li>
              <li>Entertainment / Sports & Leisure Industries</li>
            </ul>
          </div>
        </article>
        <p>I&#39;m currently most confident working on the frontend with a particular enjoyment of JavaScript and React. I have experience with and have build projects using Node.js, Express, MongoDB, Mongoose and Python, Django, PostgreSQL. I very much want to develop my skills in both front and backend professionally and/or privately.</p>
      </div>
    </div>
  )
}

export default Where