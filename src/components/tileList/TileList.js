import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({objArr}) => {

  return (
    <div>
      {objArr.map( (object, index) => <Tile object={object} key={index} />)}
    </div>
  );
};