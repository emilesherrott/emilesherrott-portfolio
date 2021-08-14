import React from 'react'

import yMoney from '../../../assets/what/ymoney.png'

const YoungEnterprise = () => {

  return (
    <article className="scss-what-article">
      <h4>Services Coordinator</h4>
      <h5>Young Money <img src={yMoney} alt="ga logo" className="scss-what-experience-logo" /></h5>
      <h5>January 2020 - May 2021</h5>
      <ul>
        <li>Ensuring delivery of the Financial Education Quality Mark</li>
        <li>Support educational practitioners receive relevant, timely and detailed financial education resources.</li>
      </ul>
    </article>
  )
}

export default YoungEnterprise