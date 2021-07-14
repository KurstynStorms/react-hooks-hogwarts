import React, { useState } from "react"
import TileDetails from "./TileDetails"

function Tile({ hog }) {
  const [isHidden, setIsHidden] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  function handleDetailsClick() {
    setShowDetails((prevShowDetails) => !prevShowDetails)
  }
  if (isHidden) return null
  
  const { name, specialty, image } = hog
  return (
    <div className="ui card eight wide column pigTile">
      <div className="image">
        <img src={image} alt="hogPic" />
      </div>
      <div className="content">
        <h3 className="header">{name}</h3>
        <div className="description">Specialty: {specialty}</div>
      </div>
      <div className="extra content">
        {showDetails ? <TileDetails hog={hog} /> : null}

        <button className="ui button" onClick={handleDetailsClick}>
          {showDetails ? "Less Info" : "More Info"}
        </button>
        <button className="ui button" onClick={() => setIsHidden(true)}>
          Hide Me{" "}
          <span role="img" aria-label="snout">
            🐽
          </span>
        </button>
      </div>
    </div>
  )
}

export default Tile