import React from "react";
import Tile from './Tile'

function HogList({ hogs }) {
  return (
		<div className="ui three stackable cards">
			{hogs.map(hog => (
				<Tile
					key={hog.name}
					hog={hog}
				/>
			))}
		</div>
  );
}

export default HogList