import React from 'react'

import Overflow from './home/Overflow'

import bill from '../assets/who/bill.jpeg'
import dd from '../assets/who/dd.jpeg'

const Who = () => {

  return (
    <div>
      <h2 className="d-flex justify-content-center scss-who-what-where-title">Who is Emile?</h2>
      <Overflow />
      <div className="container scss-who-what-where-para-text">
        <p>At university I studied Modern History, with a focus on the Cold War and a dissertation based on America military involvement in Vietnam. What made this of particular interest to me was how it was the only war where American or Western families could watch what was happening live from their armchairs or see the pictures a free press could release in their morning newspapers.</p>
        <p>I left education with a real sense of optimism about shaping the future equiped with an understanding of the past and I threw my efforts into charity. My first job was voluntary, a years mentoring of secondary school children in Birmingham.</p>
        <div className="scss-who-image-container">
          <img src={bill} alt="emile shaking hands with bill clinton" className="scss-who-image-bill" />
          <p className="scss-who-image-bill-text">I was fortunate enough to represent volunteers from Birmingham to meet former <span className="scss-who-image-bill-text-highlight">US President Bill Clinton</span>.</p>
        </div>
        <p>My journey in the charity industry has lead me to support apprentices studying Software Engineering and working with financial organisations developing tech to support students. I&#39;ve also had the opportunity to live with developers who&#39;ve satisfied answers to my questions behind a lot of the tech I use and grown my curiosity to learn more.</p>
        <div className="d-flex justify-content-center">
          <p className="scss-who-change-text">Many hours reading out of date HTML4 books learning Flash and a few other things... <span className="scss-who-change-special-text">here I am</span>.</p>
        </div>
        <p>Outside of work I like sports; cycling, football, boxing, hiking. Also a big fan of cooking Jamaican food and travelling blah blah blah SNOOZE<sup className="scss-who-z"> z..z..z..z..z..z</sup></p>
        <div className="scss-who-image-container">
          <img src={dd} alt="emile cycling a bicycle" className="scss-who-image-dd" />
          <p className="scss-who-image-bill-text">Mid-course on the Dunwich Dynamo. 112 miles from London Fields to the coast in Suffolk.</p>
        </div>
      </div>
    </div>
  )
}

export default Who