import React from 'react'

const date = new Date()
const hours = date.getHours()
let greeting = null

if (hours > 22) {
  greeting = 'Good Night'
} else if (hours >= 18) {
  greeting = 'Good Evening'
} else if (hours >= 12) {
  greeting = 'Good Afternoon'
} else if (hours >= 0) {
  greeting = 'Good Morning'
} else {
  greeting = 'Hello Friend'
}

const Time = () => {

  return (
    <h2 className="scss-time-greeting">{greeting}</h2>
  )
}

export default Time