import React, { useState } from "react"
import TileDetails from "./TileDetails"

const Tile = ({ name, hog }) => {
  const [ isHidden, setIsHidden ] = useState(false)
  const handleClick = () => {
    setIsHidden(!isHidden)
  }
  return (
    <div>
      <h2>{name}</h2>
    <span
    onClick={handleClick}>
      <img 
      alt={name}
      src={hog.image}
      className="PiggyImage"
      />
      {isHidden? <TileDetails hog={hog}/> : null}
      </span>
    </div>
  )
}

export default Tile