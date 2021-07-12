import React from "react"

const TileDetails = ({ hog }) => {
  return(
    <ul>
      <li>Specialty: {hog.specialty}</li>
      <li>Weight: {hog.weight}</li>
      <li>Greased: {hog.greased ? "Yes" : "No"}</li>
      <li>Highest Medal Achieved: {hog["highest medal achieved"]}</li>
    </ul>
  )
}

export default TileDetails