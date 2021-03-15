import React from "react";

export const Tile = ({object}) => {
  const values = Object.values(object);
  return (
    <div className="tile-container">
      {values.map( (data, index) => {
        if (index === 0) {
          return <p className='title-tile' key={index}>{data}</p>;
        }
        return <p className='tile' key={index}>{data}</p>;
        })
      }
    </div>
  );
};
