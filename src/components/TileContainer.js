import React, {useState} from "react"
import Tile from "./Tile"

const TileContainer = ({ hogs }) => {
  const hogCards = hogs.map(hog => (
    <Tile 
    name={hog.name}
    hog={hog}
    />
  ))
  return (
    <div>
        <label>
          Filter
          <select>
            <option>Greased</option>
            <option>Non Greased</option>
          </select>
        </label>
        {hogCards}
    </div>
  )
}

export default TileContainer